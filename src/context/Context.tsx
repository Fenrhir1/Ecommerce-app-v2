import { createContext, useState } from "react";
import { Product, Products, Cart, CartItem } from "../declaration";

export const ContextEcommerce = createContext<{
  product: Product;
  products: Products;
  cart: Cart;
  checkout: boolean;
  fetchProducts: () => void;
  addTocart: (product: Product) => void;
  removeFromCart: (product: CartItem) => void;
  setCheckout: (checkout: boolean) => void;
}>({
  product: {
    title: "",
    id: 0,
    image: "",
    userId: 0,
    description: "",
    qty: 0,
    price: 0,
  },
  products: [],
  cart: [],
  checkout: false,
  addTocart: () => {},
  fetchProducts: () => {},
  removeFromCart: () => {},
  setCheckout: () => {},
});

interface ContextEcommerceProviderProps {
  children: React.ReactNode;
}

export const ContextEcommerceProvider = ({
  children,
}: ContextEcommerceProviderProps) => {
  const [products, setProducts] = useState<Products>([]);
  const [cart, setCart] = useState<Cart>([]);
  const [checkout, setCheckout] = useState(false);

  const product: Product = {
    title: "",
    id: 0,
    image: "",
    userId: 0,
    description: "",
    qty: 0,
    price: 0,
  };

  const fetchProducts = async () => {
    const response = await fetch("https://mockend.up.railway.app/api/products");
    const products = await response.json();
    setProducts(products);
    return products;
  };

  const addTocart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          title: product.title,
          qty: 1,
          price: product.price,
          image: product.image,
        },
      ]);
    }
  };

  const removeFromCart = (product: CartItem) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      if (exist.qty === 1) {
        setCart(cart.filter((item) => item.id !== product.id));
      } else {
        setCart(
          cart.map((item) =>
            item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
          )
        );
      }
    }
  };

  return (
    <ContextEcommerce.Provider
      value={{
        products,
        cart,
        product,
        fetchProducts,
        addTocart,
        removeFromCart,
        checkout,
        setCheckout,
      }}
    >
      {children}
    </ContextEcommerce.Provider>
  );
};
