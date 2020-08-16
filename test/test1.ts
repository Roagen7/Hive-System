// @ts-ignore
import { Hive, HiveCell, Materials } from "../src";

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
cell2.addMaterials(Materials.PolylactidAcid, 10);
cell2.addMaterials(Materials.Polytetrafluoroethylene, 5);
cell2.addMaterials(Materials.Polytetrafluoroethylene, 5);
cell.addMaterials(Materials.Polytetrafluoroethylene, 3);
cell.addMaterials(Materials.PolylactidAcid, 10);
cell.addMaterials(Materials.PolylactidAcid, 10);
hive.addCell(cell);
hive.addCell(cell2);

hive.addCell([new HiveCell(), new HiveCell()]);

for (let cell of hive.cells) {
  console.log(cell);
}
