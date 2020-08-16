import ObjectSpecs from "../interfaces/ObjectSpecs";

export default class HiveCell {
  public objectSpecs: ObjectSpecs;

  constructor(objectSpecs?: ObjectSpecs) {
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
}
