import Material from "../interfaces/Material";

//a dict consisting of all of the materials available to use

export const Materials: {
  PolylactidAcid: Material;
  Polytetrafluoroethylene: Material;
  Stone: Material;
  IronOre: Material;
} = {
  PolylactidAcid: {
    name: "Polylactid acid",
  },
  Polytetrafluoroethylene: {
    name: "Polytetrafluoroethylene",
  },
  Stone: {
    name: "Stone ore",
  },
  IronOre: {
    name: "Iron ore",
    chance: 1 / 50,
  },
};
