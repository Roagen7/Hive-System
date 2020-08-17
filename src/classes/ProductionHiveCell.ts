import ObjectSpecs from "../interfaces/ObjectSpecs";
import CellType from "../interfaces/CellType";
import Product from "../interfaces/Product";
import HiveCell from "./HiveCell";

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
