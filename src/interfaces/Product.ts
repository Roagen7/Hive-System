import StorageIndex from "./StorageIndex";

export default interface Product {
  name: string;
  requirements: StorageIndex[];
}
