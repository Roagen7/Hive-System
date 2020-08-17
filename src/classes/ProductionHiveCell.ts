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
  produce(product: Product) {
    for (const requiredIndex of product.requirements) {
      const index = this.getIndexOfMaterial(requiredIndex.material);
      if (index != -1) {
        if (this.storage[index].count >= requiredIndex.count) {
          this.storage[index].count -= requiredIndex.count;
        } else if (this.parent) {
        }
      }
    }
  }
}
