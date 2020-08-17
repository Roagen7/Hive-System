import ObjectSpecs from "../interfaces/ObjectSpecs";
import { Materials } from "../enums/Materials";
import CellType from "../interfaces/CellType";
import Material from "../interfaces/Material";
import StorageIndex from "../interfaces/StorageIndex";
import { Hive } from "..";

export default class HiveCell implements CellType {
  public objectSpecs: ObjectSpecs;
  public parent: Hive | undefined;
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

  getIndexOfMaterial(material: Material): number {
    let i = 0;
    for (const index of this.storage) {
      if (material.name == index.material.name) {
        return i;
      }
      i++;
    }
    return -1;
  }

  addMaterials(material: Material, count: number): boolean {
    const index = this.getIndexOfMaterial(material);
    if (index != -1) {
      this.storage[index].count += count;
    } else {
      this.storage.push({ material, count });
    }

    return true;
  }
}
