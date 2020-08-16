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

console.log(hive);
for (let cell of hive.cells) {
  console.log(cell.objectSpecs);
}
