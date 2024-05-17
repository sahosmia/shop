import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { productsData } from "../data/dummy";
import { ADD_CART, DELETE_CART } from "../features/carts/cartsSlice";
import { CardItemPropsType, ProductType } from "../types";

const CartItemDemo = ({ cartItem, onStockError }: CardItemPropsType) => {
  const dispatch = useDispatch();

  const product: ProductType | undefined = productsData.find(
    (item) => item.id === cartItem.productId
  );

  const subTotal = () => {
    return product?.price * cartItem.quantity;
    
  }
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
    dispatch(DELETE_CART({ productId: cartItem.productId }));
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

    dispatch(
      ADD_CART({
        quantity:
          type === "plus" ? cartItem.quantity + 1 : cartItem.quantity - 1,
        productId: cartItem.productId,
      })
    );
  };

  // Sub total 


  return (
    <div className="">
      <div className="flex  text-xl p-3 h-[115px] justify-center items-center m-2 hover:bg-[#ebebeb]">
        <div className="w-[40%] flex items-center">
          <div className="w-[25%] my-1">
            <img
              className="object-cover h-[90px] "
              src={product?.thumbnail}
              alt=""
            />
          </div>
          <div className=" ml-2 text-blue-500">
            <Link to={`/products/${product?.id}`}>{product?.title}</Link>
          </div>
        </div>
        <div className="w-[15%]">{product?.price}</div>
        <div className="w-[10%]">{ product?.discountPercentage}</div>
        <div className="w-[15%] ">
          <div className="  flex ">
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
        </div>
        <div className="w-[10%]  px-3">{ subTotal()}</div>
        <div className="w-[10%] px-3  ">
          <button onClick={onDelete} className="border-none">
            <IoClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemDemo;
