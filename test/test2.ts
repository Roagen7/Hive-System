import {
  Hive,
  ProductionHiveCell,
  Products,
  Materials,
  HiveCell,
  MiningHiveCell,
} from "../src";

const hive = new Hive();

const prodCell = new ProductionHiveCell();

const mineCell = new MiningHiveCell();
hive.addCell(prodCell);

hive.addCell(mineCell);
prodCell.addMaterials(Materials.PolylactidAcid, 1);

mineCell.mine(Materials.IronOre, 3);
prodCell.produce(Products.Screw);
console.log(prodCell.produce(Products.Handle));

for (let cell of hive.cells) {
  console.log(cell.storage);
}
console.log(prodCell.products);
