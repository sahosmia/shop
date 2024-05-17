import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItemDemo from "../components/CartItemDemo";
import { cupons, productsData } from "../data/dummy";
import { CartItemReduxType, CuponType } from "../types";

const CartPageDemo = () => {
  const carts = useSelector(
    (state: { carts: CartItemReduxType[] }) => state.carts
  );

  const [coupon, setCoupon] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponAvailable, setCouponAvailable] = useState<CuponType | null>(
    null
  );
  const [stockError, setStockError] = useState(false);

  useEffect(() => {
    const savedCoupon = localStorage.getItem("coupon");
    if (savedCoupon) {
      setCoupon(savedCoupon);
    }

    const couponExits = cupons.find((item) => item.code === savedCoupon);

    if (couponExits) {
      setCouponAvailable(couponExits);
    } else {
      setCoupon("");
      localStorage.setItem("coupon", "");
    }
  }, []);
  const onStockOut = (status: boolean) => {
    setStockError(status);
  };

  const calculateTotalAmount = () => {
    return cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);
  };

 

  const cartProducts = carts.map((cart) => {
    const data = productsData.find((item) => item.id === cart.productId);
    if (data) {
      return { ...data, quantity: cart.quantity };
    } else {
      throw new Error(`Product with ID ${cart.productId} not found.`);
    }
  });

  // handle Cupon
  const handleCupon = () => {
    setCouponError("");
    setCouponAvailable(null);
    if (coupon !== "") {
      const couponExits = cupons.find((item) => item.code === coupon);
      if (couponExits) {
        setCouponAvailable(couponExits);
      } else {
        setCouponError("Cupon is not available");
      }
    } else {
      setCouponError("your cupon is empthy");
    }
    localStorage.setItem("coupon", coupon);
  };

  return (
    <div className="container bg-white mx-auto p-4">
      <h1 className="text-4xl font-bold  text-center mb-6 ">Shopping Cart</h1>

      <div className="container w-full ">
        <div className="bg-white border-y-2 border-gray-400 border-collapse   flex   p-3 text-xl font-bold ">
          <div className="w-[40%]">Product</div>
          <div className="w-[15%]">Unit Price</div>
          <div className="w-[10%]">Size </div>
          <div className="w-[15%]">Quantity</div>
          <div className="w-[10%] ">Subtotal</div>
          <div className="w-[10%] ">Action</div>
        </div>

        {/* Cart item show  */}
        {carts.map((cartItem) => (
          <CartItemDemo kay={cartItem.id} cartItem={cartItem} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-6">
        <h3 className="text-2xl text-center">Total Amount ${calculateTotalAmount().toFixed(2)}</h3>
      </div>
      <div className="flex items-center justify-center">
        <button className="p-3 bg-orange-400 text-white  px-20 my-3 py-3 text-xl hover:bg-gray-400">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartPageDemo;
