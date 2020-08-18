import {
  Hive,
  ProductionHiveCell,
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
mineCell.addMaterials(Materials.PolylactidAcid, 10);
mineCell.mine(Materials.IronOre, 3);
prodCell.produce(Materials.Screw);
prodCell.produce(Materials.Screw);
prodCell.addMaterials(Materials.PolylactidAcid, 1);
prodCell.produce(Materials.Screw);
for (const cell of hive.cells) {
  console.log("KOMÓRKA:  ", cell);
  console.log("STORAGE KOMÓRKI", cell.storage);
}
