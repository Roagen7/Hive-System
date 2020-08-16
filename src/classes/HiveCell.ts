import ObjectSpecs from "../interfaces/ObjectSpecs";
import { Materials } from "../enums/Materials";
import CellType from "../interfaces/CellType";
import Material from "../interfaces/Material";
import StorageIndex from "../interfaces/StorageIndex";

export default class HiveCell implements CellType {
  public type = "normal";
  public objectSpecs: ObjectSpecs;
  public storage: StorageIndex[] = [];

  constructor(objectSpecs?: ObjectSpecs) {
    if (objectSpecs) {
      this.objectSpecs = objectSpecs;
    } else {
      this.objectSpecs = {
        material: Materials.PolylactidAcid,
        hollowInside: false,
        numOfAngles: 6,
      };
    }
  }

  addMaterials(material: Material, count: number): boolean {
    for (const index of this.storage) {
      if (index.material.name == material.name) {
        index.count += count;
        return true;
      }
    }
    this.storage.push({ material, count });
    return true;
  }

  work(target: string | Material): boolean {
    throw new Error("Method not implemented.");
  }
}
