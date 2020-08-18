import StorageIndex from "./StorageIndex";

/**
 * interface for materials
 *
 * @export
 * @interface Material
 */
export default interface Material {
  name: string;
  craftable: boolean;
  requirements?: StorageIndex[];
  chance?: number;
  hardness?: number;
  fireproofness?: number;
}
