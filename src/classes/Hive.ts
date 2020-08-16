import ObjectSpecs from "../interfaces/ObjectSpecs";
import HiveCell from "./HiveCell";

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
        material: "Polylactid acid",
        numOfAngles: 6,
      };
    }
  }

  public addCell(cell: any): void {
    this.cells.push(cell);
  }

  public meow(): void {}
}
