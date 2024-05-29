import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { Tooltip } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { BiCartAdd } from "react-icons/bi";
import { ProductPropsType } from "../../types";
import useAuth from "../../hooks/useAuth";
import useWishLists from "../../hooks/useWishLists";
import { ADD_CART } from "../../features/carts/cartsSlice";
import { ADD_Wish } from "../../features/wish-lists/wishListsSlice";
import { getDiscountPrice } from "../../utils";
import ProductQuickView from "../Product/ProductQuickView";

const ProductItem = ({ product }: ProductPropsType) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const wishLists = useWishLists();
  const [quickView, setQuickView] = useState(false);

  const checkWhisLists =
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
      toast.success("add success");
    } else {
      toast.error("Login First");
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
      toast.success("Item add sucessfully added");
    } else {
      toast.error("Please Login first");
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
        <div className="bg-white relative overflow-hidden rounded-lg border cursor-pointer block mt-5 max-w-sm  ">
          <div className="absolute top-3 left-3">
            <div className="uppercase bg-green-400 px-3 py-0.5 text-[10px] text-white inline-block rounded-full  z-0 mr-2">
              New
            </div>
            {/* {product.discountPercentage !== 0 && (
            <div className="uppercase bg-red-400 px-3 py-0.5 text-[10px] text-white inline-block rounded-full  z-0 mr-2">
              12.36%
            </div>
          )} */}
            <div className="uppercase bg-orange-400 px-3 py-0.5 text-[10px] text-white inline-block rounded-full  z-0 mr-2">
              Sale
            </div>
          </div>

          <div className="group transition-all">
            <div className="h-[300px] overflow-hidden relative">
              <img
                src={product.thumbnail}
                alt={product.title}
                className=" object-cover w-full h-full rounded-lg"
              />
              <div className=" absolute bg-white shadow bg-opacity-70   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded invisible group-hover:visible transition-all flex-center divide-x divide-primary2 p-2 border border-primary">
                <Tooltip title="Quick View" placement="top" arrow>
                  <button
                    onClick={() => setQuickView(true)}
                    className="relative pr-1"
                  >
                    <MdOutlineRemoveRedEye />
                  </button>
                </Tooltip>
                <Tooltip title="Add to Wish List" placement="top" arrow>
                  <button onClick={handleAddWishList} className="relative pl-1">
                    {checkWhisLists ? (
                      <MdOutlineFavorite className="text-primary" />
                    ) : (
                      <MdOutlineFavoriteBorder />
                    )}
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="mt-2 p-3">
              <h6 className=" text-assLight mb-3 text-xs">
                {product.category}
              </h6>
              <Link
                to={`/products/${product.id}`}
                className="font-medium text-ass mb-3"
              >
                {product.title}
              </Link>
              <div className="flex items-center mb-3">
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <span className="text-assLight text-sm ml-1">(2)</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-end">
                  <span className=" font-semibold text-primary">
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
                  className="bg-primary bg-opacity-25 hover:bg-opacity-80 text-primary2 hover:text-white hover:-translate-y-1 transition-all duration-300 py-2 px-4 text-sm font-medium  flex justify-center items-center  rounded"
                >
                  <BiCartAdd className="text-base mr-1" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Quick view  */}
      {quickView && (
        <ProductQuickView handleQuickViewClose={handleQuickViewClose} product={product} />
      )}
    </>
  );
};

export default ProductItem;
