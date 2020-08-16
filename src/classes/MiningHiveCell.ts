import ObjectSpecs from "../interfaces/ObjectSpecs";
import { Materials } from "../enums/Materials";
import CellType from "../interfaces/CellType";
import Material from "../interfaces/Material";
import HiveCell from "./HiveCell";

export default class MiningHiveCell extends HiveCell implements CellType {
  constructor(objectSpecs?: ObjectSpecs) {
    super(objectSpecs);
  }
}
