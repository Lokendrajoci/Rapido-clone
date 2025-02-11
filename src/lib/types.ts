export interface Post {
  id: number;
  title: string;
  description: string;
  images: string[];
  products: any[]; // Consider defining a proper type for products
}
