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

prodCell.produce(Materials.Handle);

console.log(prodCell.storage);
