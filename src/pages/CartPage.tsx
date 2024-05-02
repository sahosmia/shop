import { Helmet } from "react-helmet";
import { cupons, productsData } from "../data/dummy";
import CartItem from "../components/CartItem";
import { toast } from "react-toastify";
import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { useCartContext, useCartDispatchContext } from "../context/CartContext";
import { CuponType } from "../types";

const CartPage = () => {
  const { carts }: { carts: number[] } = useCartContext() ?? { carts: [] };
  const dispatch = useCartDispatchContext() ?? (() => {}); // Assign the context value or a dummy function as a fallback

  const [cupon, setCupon] = useState("");
  const [cuponError, setCuponError] = useState("");
  const [cuponAvailable, setCuponAvailable] = useState<CuponType | null>(null);

  // get Product item  from products by product id
  const cartProducts = productsData.filter((product) =>
    carts.includes(product.id)
  );

  // total amount
  const totalAmount = cartProducts.reduce((total, product) => {
    const discountedPrice =
      product.price - (product.price * product.discountPercentage) / 100;
    return total + discountedPrice;
  }, 0);

  const cuponDiscount = () => {
    if (cuponAvailable) {
      return (totalAmount * cuponAvailable.discount) / 100;
    }
    return 0;
  };
  const subtotal = totalAmount - cuponDiscount();

  // handle delete
  const onDelete = (id: number) => {
    dispatch({
      type: "DELETE_CART",
      id,
    });
    toast.success(`delete ${id}`);
  };

  // handle Cupon
  const handleCupon = () => {
    setCuponError("");
    setCuponAvailable(null);
    if (cupon !== "") {
      const cuponExits = cupons.find((item) => item.code === cupon);
      if (cuponExits) {
        setCuponAvailable(cuponExits);
      } else {
        setCuponError("Cupon is not available");
      }
    } else {
      setCuponError("your cupon is empthy");
    }
  };

  return (
    <>
      <Helmet>
        <title>CartPage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>

      <section className="py-20">
        <div className="container grid grid-cols-12 gap-5">
          {cartProducts.length > 0 ? (
            <>
              <div className="col-span-9">
                <div className="divide-y border">
                  {cartProducts.map((c) => (
                    <CartItem key={c.id} product={c} onDelete={onDelete} />
                  ))}
                </div>

                <div className="flex mt-3 rounded overflow-hidden">
                  <input
                    type="text"
                    value={cupon}
                    onChange={(e) => setCupon(e.target.value)}
                    placeholder="Apply copun code"
                    className="border-none bg-slate-200 text-sm p-3"
                  />
                  <button
                    type="button"
                    onClick={handleCupon}
                    disabled
                    className={`bg-primary-500 cursor-pointer px-4 overflow-hidden text-white ${
                      cupon === "" &&
                      "disabled:bg-primary-400 disabled:cursor-not-allowed"
                    }`}
                  >
                    <BiSend />
                  </button>
                </div>
                {cuponError !== "" && (
                  <div className="text-red-600 text-sm font-semibold pt-1">
                    {cuponError}{" "}
                  </div>
                )}
                {cuponAvailable && (
                  <div className="text-green-600 text-sm font-semibold pt-1">
                    Your cupon code is available !!
                  </div>
                )}
              </div>
              <div className=" col-span-3">
                <div className="divide-y border">
                  <div className="flex divide-x">
                    <div className="flex-1 p-2">Total</div>
                    <div className="flex-1 p-2 text-end">
                      {totalAmount.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex divide-x">
                    <div className="flex-1 p-2">Discount</div>
                    <div className="flex-1 p-2 text-end">
                      {cuponDiscount().toFixed(2)}
                    </div>
                  </div>
                  <div className="flex divide-x">
                    <div className="flex-1 p-2">Sub Total</div>
                    <div className="flex-1 p-2 text-end">
                      {subtotal.toFixed(2)}
                    </div>
                  </div>
                </div>

                <button className="bg-primary-500 text-white w-full py-2 mt-2 rounded">
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <h1>no data</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
