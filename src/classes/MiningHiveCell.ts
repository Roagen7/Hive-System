import ObjectSpecs from "../interfaces/ObjectSpecs";
import CellType from "../interfaces/CellType";
import HiveCell from "./HiveCell";

export default class MiningHiveCell extends HiveCell implements CellType {
  constructor(objectSpecs?: ObjectSpecs) {
    super(objectSpecs);
  }
}
