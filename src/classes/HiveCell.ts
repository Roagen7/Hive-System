import ObjectSpecs from "../interfaces/ObjectSpecs";
import MaterialsInStorage from "../interfaces/MaterialsInStorage";
import { Materials } from "../enums/Materials";

export default class HiveCell {
  public objectSpecs: ObjectSpecs;
  public materialsInStorage?: MaterialsInStorage;

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
}
