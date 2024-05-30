import { IoClose } from "react-icons/io5";
import { CardItemPropsType, ProductType } from "../../types";
import { productsData } from "../../data/dummy";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ADD_CART, DELETE_CART } from "../../features/carts/cartsSlice";
import useAuth from "../../hooks/useAuth";

const CartItem = ({ cartItem, onStockError }: CardItemPropsType) => {
  const dispatch = useDispatch();
  const auth = useAuth();

  const product: ProductType | undefined = productsData.find(
    (item) => item.id === cartItem.productId
  );

  // useEffect to check stock once when component mounts
  useEffect(() => {
    if (product && product.stock < cartItem.quantity) {
      onStockError(true);
    }
    return;
  }, [product, cartItem.quantity, onStockError]);

  // Function to handle delete
  const onDelete = () => {
    if (product && product.stock < cartItem.quantity) {
      onStockError(false);
    }
    dispatch(DELETE_CART({ productId: cartItem.productId, userId: auth?.user?.id }));
    toast.success(`Deleted ${cartItem.productId}`);
  };

  // Function to handle updating quantity
  const handleUpdateQuantity = (type: "plus" | "minus") => {
    if (type === "minus") {
      if (cartItem.quantity === 1) {
        toast.error("Invalid input");
        return;
      }
      if (product && product.stock <= cartItem.quantity) {
        onStockError(false);
      }
    }
    if (type === "plus" && product && product.stock <= cartItem.quantity) {
      onStockError(true);
      toast.error(`Only ${product.stock} left in stock`);
    }

    dispatch(ADD_CART({
      quantity: type === "plus" ? cartItem.quantity + 1 : cartItem.quantity - 1,
      productId: cartItem.productId,
      userId: auth?.user?.id,
    }))

  };

  return (
    <div className="flex divide-x">
      <div className="flex-1 p-2">
        <Link to={`/products/${product?.id}`}>{product?.title}</Link>
      </div>
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
            className="bg-slate-200 w-7"
            onClick={() => handleUpdateQuantity("plus")}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex-1 p-2">{product?.discountPercentage}</div>
      <div className="flex-1 p-2">
        {product && cartItem.quantity > product.stock ? (
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
