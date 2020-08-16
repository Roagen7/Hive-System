import HiveCell from "./HiveCell";
import { Materials } from "../enums/Materials";
import ObjectSpecs from "../interfaces/ObjectSpecs";
import StorageIndex from "../interfaces/StorageIndex";

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
      for (const index of cell.storage) {
        let hasThisMaterial: boolean = false;
        for (const indexParent of hiveStorage) {
          if (indexParent.material.name == index.material.name) {
            indexParent.count += index.count;
            hasThisMaterial = true;
          }
        }
        if (!hasThisMaterial) {
          hiveStorage.push(index);
        }
      }
    }
    return hiveStorage;
  }

  public addCell(cell: any): void {
    if (cell as HiveCell) {
      if (!cell.objectSpecs) {
        cell.objectSpecs = this.objectSpecs;
      }
      this.cells.push(cell);
    } else {
      for (let c of cell) {
        this.addCell(c);
      }
    }
  }
}
