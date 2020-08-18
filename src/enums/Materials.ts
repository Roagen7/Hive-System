//@ts-ignore

import Material from "../interfaces/Material";

//a dict consisting of all of the materials available to use
// chance - every x blocks of stone one block of the material occurs

const Basic = {
  Stone: {
    name: "Stone ore",
    chance: 0,
    craftable: false,
  },
  IronOre: {
    name: "Iron ore",
    chance: 50,
    craftable: false,
  },
};

const Metals = {
  Iron: {
    name: "Iron",
    craftable: true,
    requirements: [{ material: Basic.IronOre, count: 3 }],
  },
  Gold: {
    name: "Iron ore",
    chance: 50,
    craftable: false,
  },
};

const Polymers = {
  PolylactidAcid: {
    name: "Polylactid acid",
    craftable: true,
  },
  Polytetrafluoroethylene: {
    name: "Polytetrafluoroethylene",
    craftable: true,
  },
};

const Products = {
  Screw: {
    name: "Screw",
    craftable: true,
    requirements: [{ material: Polymers.PolylactidAcid, count: 4 }],
  },
  Handle: {
    name: "Handle",
    craftable: true,
    requirements: [
      {
        material: Metals.Iron,
        count: 5,
      },
    ],
  },
};

export const Materials = { ...Basic, ...Metals, ...Polymers, ...Products };
