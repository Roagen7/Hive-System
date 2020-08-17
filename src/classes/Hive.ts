import HiveCell from "./HiveCell";
import { Materials } from "../enums/Materials";
import ObjectSpecs from "../interfaces/ObjectSpecs";
import StorageIndex from "../interfaces/StorageIndex";
import Material from "../interfaces/Material";
import CellType from "../interfaces/CellType";

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
            console.log("teststorage", hiveStorage);
          }
        }
        if (hasThisMaterial == false) {
          hiveStorage.push(storIndex);
        }
      }
    }

    return hiveStorage;
  }
  public requestMaterialTransition(
    cell: HiveCell,
    material: Material,
    count: number
  ): void {
    const index = this.getIndexOfMaterial(material);

    if (index != -1) {
      if (this.hiveStorage[index].count >= count) {
        this.removeMaterialAmountFromChildren(material, count);
        //console.log(this.hiveStorage);
        cell.addMaterials(material, count);
      }
    }
  }

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

  public getIndexOfMaterial(material: Material): number {
    let i = 0;
    this.hiveStorage;

    ///AAAAAAAAAAAAAa
    /*
    for (let cellz of this.cells) {
      console.log(cellz.storage);
    }
    */
    for (const index of this.hiveStorage) {
      if (material.name == index.material.name) {
        return i;
      }
      i++;
    }
    return -1;
  }

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
