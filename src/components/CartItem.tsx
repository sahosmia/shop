import { IoClose } from "react-icons/io5";
import { CardItemPropsType } from "../types";
import { productsData } from "../data/dummy";
import { toast } from "react-toastify";
import { useCartDispatchContext } from "../context/CartContext";

const CartItem = ({ cartItem }: CardItemPropsType) => {
  const dispatch = useCartDispatchContext() ?? (() => {});

  const product = productsData.find((item) => item.id === cartItem.productId);

  if (!product) {
    return null;
  }
  // handle delete
  const onDelete = () => {
    dispatch({
      type: "DELETE_CART",
      productId: cartItem.productId,
    });
    toast.success(`delete ${cartItem.productId}`);
  };

  const handleUpdateQuantity = (type: "plus" | "minus") => {
    if (type === "minus" && cartItem.quantity === 1) {
      return;
    }
    if (type === "plus" && product?.stock === cartItem.quantity - 1) {
      return;
    }

    dispatch({
      type: "UPDATE_QUANTITY_CART",
      id: cartItem.id,
      quantity: type === "plus" ? cartItem.quantity + 1 : cartItem.quantity - 1,
    });
  };

  return (
    <div className="flex divide-x">
      <div className="flex-1 p-2">{product?.title}</div>
      <div className="flex-1 p-2">{product?.price}</div>
      <div className="flex-1 p-2 flex gap-3 place-content-center">
        <div className="rounded border">
          <button
            className="bg-slate-200 w-7"
            onClick={() => handleUpdateQuantity("minus")}
          >
            -
          </button>
          <span className="w-10 inline-block text-center">
            {cartItem.quantity}
          </span>
          <button
            className=" bg-slate-200 w-7 "
            onClick={() => handleUpdateQuantity("plus")}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex-1 p-2">{product?.discountPercentage}</div>
      <div className="flex-1 p-2">
        {cartItem.quantity > product?.stock ? (
          <span className="text-sm text-red-800 font-semibold">Stock Out</span>
        ) : (
          <span className="text-sm text-green-800 font-semibold">Stock In</span>
        )}
      </div>
      <div className="flex-1 p-2 flex justify-center">
        <button onClick={onDelete} className="border-none">
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
