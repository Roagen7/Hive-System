import { Materials } from "../enums/Materials";
import ObjectSpecs from "../interfaces/ObjectSpecs";
import StorageIndex from "../interfaces/StorageIndex";
import Material from "../interfaces/Material";
import HiveCell from "./HiveCell";
import { MiningHiveCell, ProductionHiveCell } from "..";

/**
 * abstract class representing a control center for a set of HiveCells
 *
 * @export
 * @class Hive
 */
export default class Hive {
  public cells: HiveCell[];
  public objectSpecs: ObjectSpecs;

  constructor(objectSpecs?: ObjectSpecs, cells?: HiveCell[]) {
    if (cells) {
      this.cells = cells;
    } else {
      this.cells = [];
    }

    if (objectSpecs) {
      this.objectSpecs = objectSpecs;
    } else {
      this.objectSpecs = {
        hollowInside: false,
        material: Materials.PolylactidAcid,
        numOfAngles: 6,
      };
    }
  }

  /**
   * returns all materials of all of the hivecells
   *
   * @readonly
   * @type {StorageIndex[]}
   * @memberof Hive
   */
  get hiveStorage(): StorageIndex[] {
    const hiveStorage: StorageIndex[] = [];
    for (const cell of this.cells) {
      for (const storIndex of cell.storage) {
        let hasThisMaterial = false;
        for (let storOfHive in hiveStorage) {
          if (
            hiveStorage[storOfHive].material.name == storIndex.material.name
          ) {
            hiveStorage[storOfHive] = {
              material: storIndex.material,
              count: hiveStorage[storOfHive].count + storIndex.count,
            };
            hasThisMaterial = true;
          }
        }
        if (hasThisMaterial == false) {
          hiveStorage.push(storIndex);
        }
      }
    }

    return hiveStorage;
  }

  /**
   * transfer amount of materials from other cells to a target cell
   *
   * @param {HiveCell} cell target cell
   * @param {Material} material
   * @param {number} count
   * @returns {boolean} true if manages to find required material amount
   * @memberof Hive
   */
  public requestMaterialTransition(
    cell: HiveCell,
    material: Material,
    count: number
  ): boolean {
    const index = this.getIndexOfMaterial(material);
    console.log(`missing ${material.name} amount: ${count}`);
    if (index != -1 && this.hiveStorage[index].count >= count) {
      this.removeMaterialAmountFromChildren(material, count);

      cell.addMaterials(material, count);
      return true;
    } else {
      if (material.craftable) {
        for (const cell of this.cells) {
          if (cell.spec == "production") {
            for (let i = 0; i < count; i++) {
              (cell as ProductionHiveCell).produce(material);
              console.log("produced:", material);
            }

            this.removeMaterialAmountFromChildren(material, count);
            cell.addMaterials(material, count);
            return true;
          }
        }
        return false;
      } else {
        for (const cell of this.cells) {
          if (cell.spec == "mining") {
            (cell as MiningHiveCell).mine(material, count);
            console.log("mined", count, material);
            this.removeMaterialAmountFromChildren(material, count);
            cell.addMaterials(material, count);
            return true;
          }
        }
        return false;
      }
    }
  }

  /**
   * a helper function for removing a certaing amount of material from cells
   *
   * @param {Material} material
   * @param {number} count
   * @returns {boolean}
   * @memberof Hive
   */
  public removeMaterialAmountFromChildren(
    material: Material,
    count: number
  ): boolean {
    for (const cell of this.cells) {
      if (count == 0) {
        return true;
      }
      const index = cell.getIndexOfMaterial(material);
      if (index != -1) {
        if (cell.storage[index].count >= count) {
          cell.storage[index].count -= count;
          return true;
        } else {
          count -= cell.storage[index].count;
          cell.storage[index].count = 0;
        }
      }
    }
    return false;
  }

  /**
   * returns index of a material in hive storage, -1 if none
   *
   * @param {Material} material
   * @returns {number}
   * @memberof Hive
   */
  public getIndexOfMaterial(material: Material): number {
    let i = 0;
    this.hiveStorage;

    for (const index of this.hiveStorage) {
      if (material.name == index.material.name) {
        return i;
      }
      i++;
    }
    return -1;
  }

  /**
   * adds cell to hive
   *
   * @param {*} cell
   * @memberof Hive
   */
  public addCell(cell: any): void {
    if (cell as HiveCell) {
      if (!cell.objectSpecs) {
        cell.objectSpecs = this.objectSpecs;
      }
      cell.parent = this;
      this.cells.push(cell);
    } else {
      for (let c of cell) {
        this.addCell(c);
      }
    }
  }
}
