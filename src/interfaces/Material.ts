/**
 * interface for materials
 *
 * @export
 * @interface Material
 */
export default interface Material {
  name: string;
  craftable: boolean;
  chance?: number;
  hardness?: number;
  fireproofness?: number;
}
