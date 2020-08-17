import ObjectSpecs from "../interfaces/ObjectSpecs";
import CellType from "../interfaces/CellType";
import Product from "../interfaces/Product";
import HiveCell from "./HiveCell";
import Material from "../interfaces/Material";
import { Products } from "../enums/Products";

/**
 * hive cell specialised in production of Products
 *
 * @export
 * @class ProductionHiveCell
 * @extends {HiveCell}
 * @implements {CellType}
 */
export default class ProductionHiveCell extends HiveCell implements CellType {
  constructor(objectSpecs?: ObjectSpecs) {
    super(objectSpecs);
  }

  /**
   * main production function of a ProductionHiveCell
   *
   * @param {Product} product
   * @returns {boolean}
   * @memberof ProductionHiveCell
   */
  produce(product: Product): boolean {
    for (const requiredIndex of product.requirements) {
      const index = this.getIndexOfMaterial(requiredIndex.material);
      switch (index) {
        case -1:
          if (
            this.parent &&
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
          break;
        default:
          switch (this.storage[index].count >= requiredIndex.count) {
            case true:
              this.storage[index].count -= requiredIndex.count;
              this.products.push(product);
              break;
            case false:
              if (
                this.parent &&
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
              break;
          }
      }
    }
    return true;
  }
}
