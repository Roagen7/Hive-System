import Material from "../interfaces/Material";
import StorageIndex from "../interfaces/StorageIndex";
import Product from "../interfaces/Product";
import { Materials } from "./Materials";
export const Products: { Screw: Product; Handle: Product } = {
  Screw: {
    name: "Screw",
    requirements: [{ material: Materials.PolylactidAcid, count: 4 }],
  },
  Handle: {
    name: "Handle",
    requirements: [{ material: Materials.Polytetrafluoroethylene, count: 5 }],
  },
};
