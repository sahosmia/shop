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
        <Link to={`/products/${product?.id}`}>{product?.title}</Link>
      </div>
      <div className="flex-1 p-2">{product?.price}</div>

      <div className="flex-1 p-2">{product?.discountPercentage}</div>
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
