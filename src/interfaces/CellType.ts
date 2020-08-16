import ObjectSpecs from "./ObjectSpecs";

export default interface CellType {
  objectSpecs: ObjectSpecs;

  work(): boolean;
}
