import ObjectSpecs from "./ObjectSpecs";
import Material from "./Material";
import StorageIndex from "./StorageIndex";

export default interface CellType {
  objectSpecs: ObjectSpecs;
  storage: StorageIndex[];
}
