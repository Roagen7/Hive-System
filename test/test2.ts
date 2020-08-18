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

prodCell.produce(Materials.Coin);
console.log(
  "produced",
  Materials.Coin,
  "mined total of",
  mineCell.storage[0].count,
  mineCell.storage[0].material.name
);
