import {
  Hive,
  ProductionHiveCell,
  Products,
  Materials,
  HiveCell,
} from "../src";

const hive = new Hive();

const prodCell = new ProductionHiveCell();
const cell = new HiveCell();
const cell2 = new HiveCell();

hive.addCell(prodCell);
hive.addCell(cell);
hive.addCell(cell2);
cell.addMaterials(Materials.Polytetrafluoroethylene, 3);
cell.addMaterials(Materials.PolylactidAcid, 2);
cell2.addMaterials(Materials.Polytetrafluoroethylene, 4);
cell2.addMaterials(Materials.PolylactidAcid, 1);

console.log(hive.hiveStorage);
console.log(hive.hiveStorage);

//hive.requestMaterialTransition(prodCell, Materials.Polytetrafluoroethylene, 7);
