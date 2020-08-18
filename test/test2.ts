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
const toProduce = Materials.Handle;
prodCell.produce(toProduce);
console.log(
  "produced",
  toProduce,
  "mined total of",
  mineCell.storage[0].count,
  mineCell.storage[0].material.name
);
