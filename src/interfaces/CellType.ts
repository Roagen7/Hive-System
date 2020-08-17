import Hive from "../classes/Hive";
import ObjectSpecs from "./ObjectSpecs";
import StorageIndex from "./StorageIndex";

/**
 * interface for HiveCells
 *
 * @export
 * @interface CellType
 */
export default interface CellType {
  parent: Hive | undefined;
  objectSpecs: ObjectSpecs;
  storage: StorageIndex[];
}
