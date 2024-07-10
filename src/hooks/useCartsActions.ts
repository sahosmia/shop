import useAuth from "./useAuth";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../features/carts/cartsSlice";
import { showNotification } from "../utils";

const useCartsActions = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  //product
  // cartQuantity

  const handleAddToCart = (productId: number, cartQuantity = 1) => {
    if (productId) {
      if (auth.user !== null) {
        dispatch(
          ADD_CART({
            productId: productId,
            quantity: cartQuantity,
            userId: auth.user.id,
          })
        );
        showNotification("success", "Product added to cart.");
      } else {
        showNotification("error", "Login First");
      }
    }
  };
  return { handleAddToCart };
};

export default useCartsActions;
