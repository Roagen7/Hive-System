import {
  Hive,
  ProductionHiveCell,
  Materials,
  HiveCell,
  MiningHiveCell,
} from "../src";

const hive = new Hive();

const prodCell = new ProductionHiveCell();

//const mineCell = new MiningHiveCell();
hive.addCell(prodCell);
//hive.addCell(mineCell);
const toProduce = Materials.GoldenRing;
prodCell.produce(toProduce);

console.log(prodCell.storage);

console.log(
  "produced",
  toProduce,
  "mined total of",
  hive.cells[1].storage[0].count,
  hive.cells[1].storage[0].material.name
);
