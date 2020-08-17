import ObjectSpecs from "./ObjectSpecs";
import Material from "./Material";
import StorageIndex from "./StorageIndex";
import { Hive } from "..";

export default interface CellType {
  parent: Hive | undefined;
  objectSpecs: ObjectSpecs;
  storage: StorageIndex[];
}
