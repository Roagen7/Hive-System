import Product from "../interfaces/Product";
import { Materials } from "./Materials";

//a dict consisting of products that are available to make

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
