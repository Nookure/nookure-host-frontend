export default interface Product {
  name: string;
  url: string;
  description?: string;
  blank?: boolean;
  price?: number;
  unit?: string;
  discount?: number;
  image: string;
  monthly?: boolean;
}