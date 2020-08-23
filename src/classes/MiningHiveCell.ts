import ObjectSpecs from "../interfaces/ObjectSpecs";
import CellType from "../interfaces/CellType";
import HiveCell from "./HiveCell";
import Material from "../interfaces/Material";
import { Materials } from "../enums/Materials";

export default class MiningHiveCell extends HiveCell implements CellType {
  public spec = "mining";
  constructor(objectSpecs?: ObjectSpecs) {
    super(objectSpecs);
  }

  /**
   * mining method
   *
   * @param {Material} material
   * @param {number} count
   * @return {*}  {void}
   * @memberof MiningHiveCell
   */
  public mine(material: Material, count: number): void {
    console.log("mining...");
    if (!material.chance) {
      return;
    } else {
      while (count != 0) {
        for (let i = 0; i < material.chance; i++) {
          this.addMaterials(Materials.Stone, 1);
        }
        this.addMaterials(material, 1);
        count--;
      }
    }
  }
}
