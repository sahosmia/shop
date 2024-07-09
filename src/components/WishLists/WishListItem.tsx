import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { productsData } from "../../data/dummy";
import { DELETE_Wish } from "../../features/wish-lists/wishListsSlice";
import { ProductType, WishListItemPropsType } from "../../types";
import useAuth from "../../hooks/useAuth";
import { getDiscountPrice, showNotification } from "../../utils";
import { MdOutlineShoppingCart } from "react-icons/md";
import useCartsActions from "../../hooks/useCartsActions";

const WishListItem = ({ wishListItem }: WishListItemPropsType) => {
  const dispatch = useDispatch();
  const auth = useAuth();
  const { handleAddToCart } = useCartsActions();

  const product: ProductType | undefined = productsData.find(
    (item) => item.id === wishListItem.productId
  );

  // Function to handle delete
  const onDelete = () => {
    dispatch(
      DELETE_Wish({ productId: wishListItem.productId, userId: auth?.user?.id })
    );
    showNotification("success", `Deleted ${wishListItem.productId}`);
  };

  return (
    <div className="flex divide-x">
      <div className="flex-1 p-2">
        <Link to={`/products/${product?.id}`}>
          <div className="flex gap-2 group">
            <img
              className="w-12 h-12 object-contain border rounded "
              src={product?.thumbnail}
              alt=""
            />
            <h6 className="max-w-56 text-ass group-hover:text-primary  transition-all duration-300">
              {" "}
              {product?.title}
            </h6>
          </div>
        </Link>
      </div>
      <div className="flex-1 p-2 flex justify-center items-center">
        $
        {getDiscountPrice(
          product?.price || 0,
          product?.discountPercentage || 0
        )}
      </div>

      <div className="flex-1 p-2 flex justify-center items-center">
        {product && product.stock === 0 ? (
          <span className="text-sm text-red-800 font-semibold ">Stock Out</span>
        ) : (
          <span className="text-sm text-green-800 font-semibold ">
            Stock In
          </span>
        )}
      </div>

      <div className="flex-1 p-2 flex justify-center items-center gap-2">
        <button
          title="Add to Cart"
          onClick={() => handleAddToCart(product?.id || 0)}
          className="border-none bg-primary2 bg-opacity-80 text-white rounded p-2"
        >
          <MdOutlineShoppingCart />
        </button>
        <button
          title="Delete"
          onClick={onDelete}
          className=" border bg-transparent bg-opacity-80  rounded p-2"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
