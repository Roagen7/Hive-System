import HiveCell from "./HiveCell";
import { Materials } from "../enums/Materials";
import ObjectSpecs from "../interfaces/ObjectSpecs";

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

  public addCell(cell: any): void {
    if (!cell.objectSpecs) {
      cell.objectSpecs = this.objectSpecs;
    }
    this.cells.push(cell);
  }
}
