//third-party libary
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
// internal data
import { productsData } from "../../data/dummy";
// redux method
import { DELETE_Wish } from "../../features/wish-lists/wishListsSlice";
// types
import { ProductType, WishListItemPropsType } from "../../types";
import useAuth from "../../hooks/useAuth";
import { getDiscountPrice } from "../../utils";
// Internal Compornant

const WishListItem = ({ wishListItem }: WishListItemPropsType) => {
  const dispatch = useDispatch();
  const auth = useAuth();

  const product: ProductType | undefined = productsData.find(
    (item) => item.id === wishListItem.productId
  );
  // Function to handle delete
  const onDelete = () => {
    dispatch(
      DELETE_Wish({ productId: wishListItem.productId, userId: auth?.user?.id })
    );
    toast.success(`Deleted ${wishListItem.productId}`);
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
      <div className="flex-1 p-2">
        $
        {getDiscountPrice(
          product?.price || 0,
          product?.discountPercentage || 0
        )}
      </div>

      <div className="flex-1 p-2">
        {product && product.stock === 0 ? (
          <span className="text-sm text-red-800 font-semibold">Stock Out</span>
        ) : (
          <span className="text-sm text-green-800 font-semibold">Stock In</span>
        )}
      </div>
      <div className="flex-1 p-2 flex justify-center">
        <button onClick={onDelete} className="border-none">
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default WishListItem;
