export interface Product {
  title: string;
  id: number;
  image: string;
  userId: number;
  description: string;
  qty: number;
  price: number;
}

export type Products = Product[];

export interface CartItem {
  id: Product["userId"];
  title: Product["title"];
  qty: number;
  price: Product["price"];
  image: Product["image"];
}

export type Cart = CartItem[];
