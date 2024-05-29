import { toast } from "react-toastify";
import useAuth from "./useAuth";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../features/carts/cartsSlice";

const useCartsActions = (productId:number, cartQuantity=1) => {
  const auth = useAuth();
  const dispatch = useDispatch();
  //product
  // cartQuantity

  const handleAddToCart = () => {
    if (productId) {
      if (auth.user !== null) {
        dispatch(
          ADD_CART({
            productId: productId,
            quantity: cartQuantity,
            userId: auth.user.id,
          })
        );
        toast.success("Product added to cart.");
      } else {
        toast.error("Login First");
      }
    }
  };
  return { handleAddToCart };
};

export default useCartsActions;
