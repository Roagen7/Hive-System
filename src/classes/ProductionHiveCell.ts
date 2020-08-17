import ObjectSpecs from "../interfaces/ObjectSpecs";
import { Materials } from "../enums/Materials";
import CellType from "../interfaces/CellType";
import Material from "../interfaces/Material";
import HiveCell from "./HiveCell";
import Product from "../interfaces/Product";

export default class ProductionHiveCell extends HiveCell implements CellType {
  constructor(objectSpecs?: ObjectSpecs) {
    super(objectSpecs);
  }
  produce(product: Product) {
    for (const requiredIndex of product.requirements) {
      console.log(requiredIndex);
    }
  }
}
