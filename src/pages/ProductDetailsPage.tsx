import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { productsData } from "../data/dummy";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ProductNotFound from "../components/Error/ProductNotFound";
import { CartItemReduxType, ProductType } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART } from "../features/carts/cartsSlice";

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

  useEffect(() => {
    const checkExists = carts.find(
      (item) => productId && item.productId === parseInt(productId)
    );
    if (checkExists) {
      setCartQuantity(checkExists.quantity);
    }
  }, [carts, productId]);

  const handleQuantityChange = (change: number) => {
    setCartQuantity((prev) => prev + change);
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
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>
              Quantity:{" "}
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              {cartQuantity}
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>

            <motion.button
              initial={{ backgroundColor: "#1a1a1a" }}
              whileHover={{ backgroundColor: "#3a3a3a" }}
              onClick={handleAddToCart}
              className="w-full text-sm text-center py-2 mt-5 text-white rounded-full"
            >
              Add To Cart
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;
