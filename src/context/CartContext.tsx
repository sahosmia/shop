import { createContext, ReactNode, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/CartReducer";
import { CartReducerAction } from "../types";

type CartsType = {
  carts: number[];
};

export const CartContext = createContext<CartsType | null>(null);
export const CartDispatchContext = createContext<React.Dispatch<CartReducerAction> | null>(
  null
);

// Step 2: Create a provider component

const cartsData = [1, 6];
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
