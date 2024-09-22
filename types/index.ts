export type Product = {
  id: number;
  title: string;
  price: number;
  image?: string;
  description?: string;
  category?: string;
  rating?: Rating;
};
type Rating = {
  count: number;
  rating: number;
};
export type Cart = Product & {
  quantity: number;
};
