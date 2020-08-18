import ObjectSpecs from "../interfaces/ObjectSpecs";
import CellType from "../interfaces/CellType";

import HiveCell from "./HiveCell";
import Material from "../interfaces/Material";

/**
 * hive cell specialised in production of Products
 *
 * @export
 * @class ProductionHiveCell
 * @extends {HiveCell}
 * @implements {CellType}
 */
export default class ProductionHiveCell extends HiveCell implements CellType {
  public spec = "production";
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
  produce(product: Material): boolean {
    if (!product.craftable || !product.requirements) {
      return false;
    }

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
              this.addMaterials(product, 1);
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
