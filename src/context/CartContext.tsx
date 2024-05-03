import { createContext, ReactNode, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";
import { CartItemType, CartReducerAction } from "../types";
import { cartsData } from "../data/dummy";

export const CartContext = createContext<{ carts: CartItemType[] } | null>(
  null
);
export const CartDispatchContext =
  createContext<React.Dispatch<CartReducerAction> | null>(null);

// Step 2: Create a provider component

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [carts, dispatch] = useReducer(cartReducer, cartsData);

  return (
    <CartContext.Provider value={{ carts }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

// Step 3: Create a consumer hook (optional)
export const useCartContext = () => useContext(CartContext);
export const useCartDispatchContext = () => useContext(CartDispatchContext);
