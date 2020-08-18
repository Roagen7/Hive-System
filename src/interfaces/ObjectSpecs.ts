import Material from "./Material";

/**
 * interface of ObjectSpecs which specifies the attributes of a HiveCell
 *
 * @export
 * @interface ObjectSpecs
 */
export default interface ObjectSpecs {
  material: Material;
  hollowInside: boolean;
  numOfAngles: number;
}
