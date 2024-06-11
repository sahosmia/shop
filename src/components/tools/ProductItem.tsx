import { memo, MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { Tooltip } from "@mui/material";
import { ProductPropsType } from "../../types";
import useAuth from "../../hooks/useAuth";
import useWishLists from "../../hooks/useWishLists";
import { ADD_CART } from "../../features/carts/cartsSlice";
import { ADD_Wish } from "../../features/wish-lists/wishListsSlice";
import { getDiscountPrice } from "../../utils";
import ProductQuickView from "../Product/ProductQuickView";
import Portal from "./Prortal";

const ProductItem = ({ product }: ProductPropsType) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const wishLists = useWishLists();
  const [quickView, setQuickView] = useState(false);

  const checkWishLists =
    auth.user !== null &&
    wishLists.find(
      (item) => item.productId === product.id && item.userId === auth?.user?.id
    );

  const handleAddtoCart = (id: number) => {
    if (auth.user !== null) {
      dispatch(
        ADD_CART({
          productId: id,
          quantity: 1,
          userId: auth.user.id,
        })
      );
      toast.success("Item added to cart successfully");
    } else {
      toast.error("Please log in first");
    }
  };

  const handleAddWishList = () => {
    if (auth.user !== null) {
      dispatch(
        ADD_Wish({
          productId: product.id,
          userId: auth.user.id,
        })
      );
      toast.success("Item added to wishlist successfully");
    } else {
      toast.error("Please log in first");
    }
  };

  // Quick view
  const handleQuickViewClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "settings-sidebar") {
      setQuickView(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-white relative overflow-hidden rounded-lg border cursor-pointer block mt-5 w-80 min-w-72"
      >
        <div className="absolute top-3 left-3 z-10">
          <div className="uppercase bg-green-400 px-3 py-0.5 text-[10px] text-white inline-block rounded-full z-0 mr-2">
            New
          </div>
        </div>

        <div className="group transition-all">
          <div className="h-[300px] overflow-hidden relative">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu bg-white shadow-lg rounded-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 p-2">
                <Tooltip title="Quick View" placement="top" arrow>
                  <button
                    onClick={() => setQuickView(true)}
                    className="text-primary hover:text-primary-dark transition-colors focus:outline-none"
                  >
                    <MdOutlineRemoveRedEye className="text-xl" />
                  </button>
                </Tooltip>
              </div>
              <div className="flex items-center gap-2 p-2">
                <Tooltip
                  title={
                    checkWishLists
                      ? "Remove from Wish List"
                      : "Add to Wish List"
                  }
                  placement="top"
                  arrow
                >
                  <button
                    onClick={handleAddWishList}
                    className="text-primary hover:text-primary-dark transition-colors focus:outline-none"
                  >
                    {checkWishLists ? (
                      <MdOutlineFavorite className="text-xl" />
                    ) : (
                      <MdOutlineFavoriteBorder className="text-xl" />
                    )}
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="mt-2 p-3">
            <h6 className="text-assLight mb-3 text-xs">{product.category}</h6>
            <Link
              to={`/products/${product.id}`}
              className="font-medium text-ass mb-3 block hover:underline"
            >
              {product.title}
            </Link>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-end">
                <span className="font-semibold text-primary">
                  $
                  {product.discountPercentage === 0
                    ? product.price
                    : getDiscountPrice(
                        product.price,
                        product.discountPercentage
                      )}
                </span>
                {product.discountPercentage !== 0 && (
                  <span className="text-sm line-through text-assLight font-medium">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              <button
                onClick={() => handleAddtoCart(product.id)}
                className="bg-primary bg-opacity-25 hover:bg-opacity-80 text-primary2 hover:text-white hover:-translate-y-1 transition-all duration-300 py-2 px-4 text-sm font-medium flex justify-center items-center rounded focus:outline-none"
              >
                <BiCartAdd className="text-base mr-1" />
                Add
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {quickView && (
        <Portal>
          <ProductQuickView
            handleQuickViewClose={handleQuickViewClose}
            product={product}
          />
        </Portal>
      )}
    </>
  );
};

export default memo(ProductItem);
