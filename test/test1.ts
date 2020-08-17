// @ts-ignore
import {
  Hive,
  HiveCell,
  Materials,
  MiningHiveCell,
  ProductionHiveCell,
  Products,
} from "../src";

const hive = new Hive();
hive.addCell(new HiveCell());
hive.addCell(
  new HiveCell({
    material: Materials.PolylactidAcid,
    hollowInside: true,
    numOfAngles: 4,
  })
);

const cell = new HiveCell();
const cell2 = new HiveCell();
const cell3 = new MiningHiveCell();

hive.addCell(cell);
hive.addCell(cell2);
hive.addCell(cell3);

cell3.addMaterials(Materials.Polytetrafluoroethylene, 2);
cell2.addMaterials(Materials.PolylactidAcid, 10);
cell2.addMaterials(Materials.Polytetrafluoroethylene, 5);
cell2.addMaterials(Materials.Polytetrafluoroethylene, 5);
cell.addMaterials(Materials.Polytetrafluoroethylene, 3);
cell.addMaterials(Materials.PolylactidAcid, 10);
cell.addMaterials(Materials.PolylactidAcid, 10);
cell3.addMaterials(Materials.PolylactidAcid, 12);
const cell4 = new ProductionHiveCell();
hive.addCell(cell4);
cell4.addMaterials(Materials.PolylactidAcid, 4);
//cell4.produce(Products.Screw);

console.log(hive.hiveStorage);
/*
for (let cell of hive.cells) {
  console.log(cell);
}
*/
