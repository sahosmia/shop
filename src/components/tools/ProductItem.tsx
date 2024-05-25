import { BiCartAdd } from "react-icons/bi";
import { getDiscountPrice } from "../../utils";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { ADD_CART } from "../../features/carts/cartsSlice";
import { toast } from "react-toastify";
import { ProductPropsType } from "../../types";
import { Link } from "react-router-dom";
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from "@mui/material";
import { MouseEvent, useState } from "react";
import { ADD_Wish } from "../../features/wish-lists/wishListsSlice";
import useWishLists from "../../hooks/useWishLists";

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
    dispatch(
      ADD_CART({
        productId: id,
        quantity: 1,
      })
    );
    toast.success("add success");
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

  const handleAddToCartWithQuantity = () => {
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

  // Quick view
  const [cartQuantity, setCartQuantity] = useState<number>(1);

  const handleQuantityChange = (change: number) => {
    if (cartQuantity + change > 0) {
      setCartQuantity((prev) => prev + change);
    }
  };

  const handleQuickViewClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "settings-sidebar") {
      setQuickView(false);
    }
  };

  return (
    <>
      <div className="cursor-pointer block mt-5 max-w-sm ">
        <div className="bg-white relative overflow-hidden rounded-lg border ">
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
            <div className="h-[200px]   overflow-hidden relative">
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
                      <MdOutlineFavorite className="text-primary"/>
                    ) : (
                      <MdOutlineFavoriteBorder />
                    )}
                  </button>
                </Tooltip>
              </div>
            </div>
            <div className="mt-2 p-3">
              <h6 className=" text-assLight mb-3 text-xs">{product.category}</h6>
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
      </div>

      {/* Quick view  */}
      {quickView && (
        <div
          id="settings-sidebar"
          onClick={handleQuickViewClose}
          className=" z-10 absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-40 flex-center"
        >
          <div className="rounded bg-white flex gap-20 p-10">
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
                    : getDiscountPrice(
                        product.price,
                        product.discountPercentage
                      )}
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
                  onClick={handleAddToCartWithQuantity}
                  className="bg-primary bg-opacity-80 hover:bg-opacity-100  text-white  transition-all duration-300 py-2 px-4 text-sm font-medium  flex justify-center items-center  rounded"
                >
                  <BiCartAdd className="text-base mr-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
