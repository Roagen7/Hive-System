import StorageIndex from "./StorageIndex";

/**
 * interface for Product
 *
 * @export
 * @interface Product
 */
export default interface Product {
  name: string;
  requirements: StorageIndex[];
}
