import ObjectSpecs from "./ObjectSpecs";
import Material from "./Material";

export default interface CellType {
  type: string;
  objectSpecs: ObjectSpecs;

  work(target: string | Material): boolean;
}
