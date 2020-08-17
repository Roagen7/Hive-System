import Hive from "../classes/Hive";
import { Materials } from "../enums/Materials";
import ObjectSpecs from "../interfaces/ObjectSpecs";
import CellType from "../interfaces/CellType";
import Material from "../interfaces/Material";
import StorageIndex from "../interfaces/StorageIndex";
import Product from "../interfaces/Product";

/**
 * class representing single cell that has no specification whatsoever - it is just a blank template for other cells
 *
 * @export
 * @class HiveCell
 * @implements {CellType}
 */
export default class HiveCell implements CellType {
  public objectSpecs: ObjectSpecs;
  public parent: Hive | undefined;
  public storage: StorageIndex[] = [];
  public products: Product[] = [];

  constructor(objectSpecs?: ObjectSpecs) {
    if (objectSpecs) {
      this.objectSpecs = objectSpecs;
    } else {
      this.objectSpecs = {
        material: Materials.PolylactidAcid,
        hollowInside: false,
        numOfAngles: 6,
      };
    }
  }

  /**
   * returns index of specified material in storage, -1 if none
   *
   * @param {Material} material
   * @returns {number}
   * @memberof HiveCell
   */
  getIndexOfMaterial(material: Material): number {
    let i = 0;
    for (const index of this.storage) {
      if (material.name == index.material.name) {
        return i;
      }
      i++;
    }
    return -1;
  }

  /**
   * adds amount of material to storage of cell
   *
   * @param {Material} material
   * @param {number} count
   * @returns {boolean}
   * @memberof HiveCell
   */
  addMaterials(material: Material, count: number): boolean {
    const index = this.getIndexOfMaterial(material);
    if (index != -1) {
      this.storage[index].count += count;
    } else {
      this.storage.push({ material, count });
    }

    return true;
  }
}
