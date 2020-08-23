import { Materials } from "../enums/Materials";
import ObjectSpecs from "../interfaces/ObjectSpecs";
import StorageIndex from "../interfaces/StorageIndex";
import Material from "../interfaces/Material";
import HiveCell from "./HiveCell";
import MiningHiveCell from "./MiningHiveCell";
import ProductionHiveCell from "./ProductionHiveCell";

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
   * a helper function for removing a certaing amount of material from cells
   *
   * @param {Material} material
   * @param {number} count
   * @returns {boolean}
   * @memberof Hive
   */
  private removeMaterialAmountFromChildren(
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
   * assembles cell of certain type to hive
   *
   * @private
   * @memberof Hive
   */
  private assembleCell(type: "production" | "mining"): boolean {
    switch (type) {
      case "production":
        this.cells.push(new ProductionHiveCell());
        break;
      case "mining":
        this.cells.push(new MiningHiveCell());
    }

    return true;
  }

  /**
   * method for dealing with second-hand material request
   *
   * @param {HiveCell} targetCell
   * @param {Material} material
   * @param {number} count
   * @return {*}  {boolean}
   * @memberof Hive
   */

  private fetchTheMaterial(
    targetCell: HiveCell,
    material: Material,
    count: number
  ): boolean {
    const type: "production" | "mining" = material.craftable
      ? "production"
      : "mining";

    for (const cell of this.cells) {
      if (cell.spec == type) {
        if (type === "production") {
          for (let i = 0; i < count; i++) {
            (cell as ProductionHiveCell).produce(material);
            console.log("produced:", material);
          }
        }
        if (type === "mining") {
          (cell as MiningHiveCell).mine(material, count);
          console.log("mined", count, material);
        }
        this.removeMaterialAmountFromChildren(material, count);
        targetCell.addMaterials(material, count);
        return true;
      }
    }
    console.log(`ASSEMBLING ${type} cell`);
    this.assembleCell(type);
    return this.fetchTheMaterial(targetCell, material, count);
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
    targetCell: HiveCell,
    material: Material,
    count: number
  ): boolean {
    const index = this.getIndexOfMaterial(material);
    console.log(`missing ${material.name} amount: ${count}`);
    if (index != -1 && this.hiveStorage[index].count >= count) {
      this.removeMaterialAmountFromChildren(material, count);

      targetCell.addMaterials(material, count);
      return true;
    } else {
      return this.fetchTheMaterial(targetCell, material, count);
    }
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
