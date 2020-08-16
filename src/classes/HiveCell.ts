import ObjectSpecs from "../interfaces/ObjectSpecs";

import { Materials } from "../enums/Materials";
import CellType from "../interfaces/CellType";

export default class HiveCell implements CellType {
  public objectSpecs: ObjectSpecs;

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

  work() {
    return true;
  }
}
