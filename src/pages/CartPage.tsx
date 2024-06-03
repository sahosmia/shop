import { Helmet } from "react-helmet";
import { cupons, productsData } from "../data/dummy";
import { useEffect, useState } from "react";
import { CartItemReduxType, CuponType } from "../types";
import useCarts from "../hooks/useCarts";
import EmptyCart from "../components/Cart/EmptyCart";
import useAuth from "../hooks/useAuth";
import PageBanner from "../components/PageBanner";
import LoginMessage from "../components/tools/LoginMessage";
import CartTable from "../components/Cart/CartTable";
import { BiSend } from "react-icons/bi";
import TotalCartCard from "../components/Cart/TotalCartCard";
import { Link } from "react-router-dom";

const CartPage = () => {
  const carts = useCarts();
  const auth = useAuth();

  const [coupon, setCoupon] = useState(localStorage.getItem("coupon") || "");
  const [couponError, setCouponError] = useState("");
  const [couponAvailable, setCouponAvailable] = useState<CuponType | null>(
    null
  );
  const [userCarts, setUserCarts] = useState<CartItemReduxType[]>([]);
  const [stockError, setStockError] = useState(false);

  useEffect(() => {
    if (auth.user) {
      setUserCarts(carts.filter((item) => item.userId === auth?.user?.id));
    }
  }, [auth, carts]);

  useEffect(() => {
    const validCoupon = cupons.find((item) => item.code === coupon);
    if (validCoupon) {
      setCouponAvailable(validCoupon);
      setCouponError("")
    } 
    else {
      setCoupon("");
      localStorage.setItem("coupon", "");
    }
  }, []);

  const onStockOut = (status: boolean) => setStockError(status);

  const cartProducts = userCarts.map((cart) => {
    const product = productsData.find((item) => item.id === cart.productId);
    if (!product)
      throw new Error(`Product with ID ${cart.productId} not found.`);
    return { ...product, quantity: cart.quantity };
  });

  const handleCupon = () => {
    setCouponError("");
    setCouponAvailable(null);
    const validCoupon = cupons.find((item) => item.code === coupon);
    if (validCoupon) {
      setCouponAvailable(validCoupon);
    } else {
      setCouponError(
        coupon ? "Coupon is not available" : "Your coupon is empty"
      );
    }
    localStorage.setItem("coupon", coupon);
  };

  return (
    <>
      <Helmet>
        <title>Cart Page</title>
        <meta name="description" content="Cart Page" />
      </Helmet>
      <PageBanner title="Cart Page" />
      <section className="py-20">
        <div className="container">
          {auth.user ? (
            userCarts.length ? (
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 lg:col-span-9">
                  <CartTable data={userCarts} onStockError={onStockOut} />

                  <div className="flex mt-3 rounded overflow-hidden">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="Apply coupon code"
                      className="border-none bg-slate-100 text-sm p-3"
                    />
                    <button
                      type="button"
                      onClick={handleCupon}
                      className="bg-primary hover:bg-secondary cursor-pointer px-4 overflow-hidden text-white inline transition-all"
                    >
                      <BiSend />
                    </button>
                  </div>
                  {couponError && (
                    <div className="text-red-600 text-sm font-semibold pt-1">
                      {couponError}
                    </div>
                  )}
                  {couponAvailable && (
                    <div className="text-green-600 text-sm font-semibold pt-1">
                      Your coupon code is available!
                    </div>
                  )}
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <TotalCartCard
                    cartProducts={cartProducts}
                    cuponAvailable={couponAvailable}
                  />
                  {stockError ? (
                    <div className="text-red-600 text-sm font-semibold pt-1">
                      To checkout, please check product stock.
                    </div>
                  ) : (
                    <Link
                      to="/checkout"
                      className="w-full inline-block text-center bg-primary hover:bg-primary2 text-white py-2 mt-2 rounded transition-all"
                    >
                      Checkout
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <EmptyCart />
            )
          ) : (
            <LoginMessage />
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
