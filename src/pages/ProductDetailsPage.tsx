import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { productsData } from "../data/dummy";
import { toast } from "react-toastify";
import ProductNotFound from "../components/Error/ProductNotFound";
import { CartItemReduxType, ProductType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART } from "../features/carts/cartsSlice";
import { getDiscountPrice } from "../utils";
import { BiCartAdd } from "react-icons/bi";

const ProductDetailsPage: React.FC = () => {
  const [cartQuantity, setCartQuantity] = useState<number>(1);
  const dispatch = useDispatch();
  const carts = useSelector(
    (state: { carts: CartItemReduxType[] }) => state.carts
  );
  const { productId } = useParams<{ productId: string }>();
  const product: ProductType | undefined = productsData.find(
    (item) => productId && item.id === parseInt(productId)
  );

  const navigate = useNavigate();

  useEffect(() => {
    const checkExists = carts.find(
      (item) => productId && item.productId === parseInt(productId)
    );
    if (checkExists) {
      setCartQuantity(checkExists.quantity);
    }
  }, [carts, productId]);

  const handleQuantityChange = (change: number) => {
    if (cartQuantity + change > 0) {
      setCartQuantity((prev) => prev + change);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      dispatch({
        type: "ADD_CART",
        productId: product.id,
        quantity: cartQuantity,
      });

      dispatch(
        ADD_CART({
          productId: product.id,
          quantity: cartQuantity,
        })
      );
      toast.success("Product added to cart.");
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(()=>{

      return navigate("/checkout");
    }, 1000)
  };

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>ProductDetailsPage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <section className="py-20">
        <div className="container flex gap-20">
          <div className="">
            <img className="w-full h-full" src={product.thumbnail} alt="" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ass pb-2">
              {product.title}
            </h2>
            <div className="flex gap-2 items-end mb-4">
              <span className=" font-semibold text-primary text-2xl">
                $
                {product.discountPercentage === 0
                  ? product.price
                  : getDiscountPrice(product.price, product.discountPercentage)}
              </span>
              {product.discountPercentage !== 0 && (
                <div>
                  <span className=" line-through text-assLight  text-lg font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className=" text-primary2 text-sm  font-medium ml-3">
                    (-{product.discountPercentage}%)
                  </span>
                </div>
              )}
            </div>
            <p className="text-assLight mb-2">{product.description}</p>
            <div className="flex gap-2">
              <div className="border-2 inline-block rounded border-primary">
                <button
                  className="w-9 h-9 text-primary text-xl "
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="px-1">{cartQuantity}</span>
                <button
                  className="w-9 h-9 text-primary text-xl "
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-primary bg-opacity-80 hover:bg-opacity-100  text-white  transition-all duration-300 py-2 px-4 text-sm font-medium  flex justify-center items-center  rounded"
              >
                <BiCartAdd className="text-base mr-1" />
                Add to cart
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="bg-primary2 bg-opacity-80 hover:bg-opacity-100  text-white  transition-all duration-300 py-2 px-4 text-sm font-medium  flex justify-center items-center  rounded"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
