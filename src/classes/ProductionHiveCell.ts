import ObjectSpecs from "../interfaces/ObjectSpecs";
import { Materials } from "../enums/Materials";
import { Products } from "../enums/Products";
import CellType from "../interfaces/CellType";
import Material from "../interfaces/Material";
import HiveCell from "./HiveCell";
import Product from "../interfaces/Product";

export default class ProductionHiveCell extends HiveCell implements CellType {
  constructor(objectSpecs?: ObjectSpecs) {
    super(objectSpecs);
  }
  produce(product: Product): boolean {
    for (const requiredIndex of product.requirements) {
      const index = this.getIndexOfMaterial(requiredIndex.material);
      if (index != -1) {
        if (this.storage[index].count >= requiredIndex.count) {
          this.storage[index].count -= requiredIndex.count;
          this.products.push(product);
        } else if (this.parent) {
          if (
            this.parent.requestMaterialTransition(
              this,
              requiredIndex.material,
              requiredIndex.count
            )
          ) {
            this.produce(product);
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else if (this.parent) {
        if (
          this.parent.requestMaterialTransition(
            this,
            requiredIndex.material,
            requiredIndex.count
          )
        ) {
          this.produce(product);
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
}
