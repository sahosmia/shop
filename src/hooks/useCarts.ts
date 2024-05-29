import { useSelector } from "react-redux";
import { CartItemReduxType } from "../types";

const useCarts = () => {
  const carts = useSelector(
    (state: { carts: CartItemReduxType[] }) => state.carts
  );


  return carts;
}

export default useCarts