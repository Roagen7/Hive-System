import Material from "../interfaces/Material";

//a dict consisting of all of the materials available to use
// chance - every x blocks of stone one block of the material occurs
export const Materials: {
  PolylactidAcid: Material;
  Polytetrafluoroethylene: Material;
  Stone: Material;
  IronOre: Material;
} = {
  PolylactidAcid: {
    name: "Polylactid acid",
    craftable: true,
  },
  Polytetrafluoroethylene: {
    name: "Polytetrafluoroethylene",
    craftable: true,
  },
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
