import { Helmet } from "react-helmet";
import { cupons, productsData } from "../data/dummy";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { CuponType } from "../types";
import TotalCartCard from "../components/Cart/TotalCartCard";
import { Link } from "react-router-dom";
import useCarts from "../hooks/useCarts";

const CartPage = () => {
  const carts = useCarts()

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
    <>
      <Helmet>
        <title>CartPage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>

      <section className="py-20">
        <div className="container">
          {carts.length > 0 ? (
            <div className=" grid grid-cols-12 gap-5">
              <div className="col-span-9">
                <div className="divide-y border">
                  <div className="flex divide-x">
                    <div className="flex-1 p-2">Name</div>
                    <div className="flex-1 p-2">Price</div>
                    <div className="flex-1 p-2">Quantity</div>
                    <div className="flex-1 p-2">Discount</div>
                    <div className="flex-1 p-2">Stock</div>
                    <div className="flex-1 p-2 flex justify-center">Action</div>
                  </div>
                  {carts.map((cartItem) => (
                    <CartItem
                      key={cartItem.id}
                      cartItem={cartItem}
                      onStockError={onStockOut}
                    />
                  ))}
                </div>

                <div className="flex mt-3 rounded overflow-hidden">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Apply copun code"
                    className="border-none bg-slate-200 text-sm p-3"
                  />
                  <button
                    type="button"
                    onClick={handleCupon}
                    className="bg-primary-500 cursor-pointer px-4 overflow-hidden text-white"
                  >
                    <BiSend />
                  </button>
                </div>
                {couponError !== "" && (
                  <div className="text-red-600 text-sm font-semibold pt-1">
                    {couponError}
                  </div>
                )}
                {couponAvailable && (
                  <div className="text-green-600 text-sm font-semibold pt-1">
                    Your cupon code is available !!
                  </div>
                )}
              </div>
              <div className=" col-span-3">
                <TotalCartCard
                  cartProducts={cartProducts}
                  cuponAvailable={couponAvailable}
                />

                {stockError ? (
                  <div className="text-red-600 text-sm font-semibold pt-1">
                    To do checkout , first you need to check product stock in
                  </div>
                ) : (
                  <Link
                    to="/checkout"
                    className="w-full inline-block text-center bg-primary-500 text-white py-2 mt-2 rounded"
                  >
                    Checkout
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-red-200 w-full p-5 rounded ">
              <p>
                No Data here.{" "}
                <Link className="text-blue-400" to="/products">
                  Continue Shoping
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
