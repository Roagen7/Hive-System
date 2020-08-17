import ObjectSpecs from "../interfaces/ObjectSpecs";
import CellType from "../interfaces/CellType";
import HiveCell from "./HiveCell";
import Material from "../interfaces/Material";

export default class MiningHiveCell extends HiveCell implements CellType {
  constructor(objectSpecs?: ObjectSpecs) {
    super(objectSpecs);
  }

  public mine(material: Material, count: number): void {
    if (!material.chance) {
      return;
    }
  }
}
