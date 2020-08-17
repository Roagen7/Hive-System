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
prodCell.addMaterials(Materials.PolylactidAcid, 1);
cell.addMaterials(Materials.Polytetrafluoroethylene, 3);
cell.addMaterials(Materials.PolylactidAcid, 2);
cell2.addMaterials(Materials.Polytetrafluoroethylene, 10);
cell2.addMaterials(Materials.PolylactidAcid, 3);

prodCell.produce(Products.Screw);
console.log(prodCell.produce(Products.Handle));

for (let cell of hive.cells) {
  console.log(cell.storage);
}
console.log(prodCell.products);
