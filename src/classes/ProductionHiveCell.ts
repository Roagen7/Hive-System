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
    let validProduct = JSON.parse(JSON.stringify(product));
    if (!validProduct.requirements) {
      return false;
    }
    for (const requiredIndex of validProduct.requirements) {
      let index = this.getIndexOfMaterial(requiredIndex.material);

      if (index != -1 && this.storage[index].count >= requiredIndex.count) {
        this.storage[index].count -= requiredIndex.count;
      } else if (
        this.parent &&
        this.parent.requestMaterialTransition(
          this,
          requiredIndex.material,
          requiredIndex.count
        )
      ) {
        this.parent.requestMaterialTransition(
          this,
          requiredIndex.material,
          requiredIndex.count
        );
        index = this.getIndexOfMaterial(requiredIndex.material);
        this.storage[index].count -= requiredIndex.count;
      } else {
        return false;
      }
    }
    this.addMaterials(product, 1);
    return true;
  }
}
