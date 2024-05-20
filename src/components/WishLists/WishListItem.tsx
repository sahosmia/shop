import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ProductType, WishListItemPropsType } from "../../types";
import { DELETE_Wish } from "../../features/wish-lists/wishListsSlice";
import { toast } from "react-toastify";
import { productsData } from "../../data/dummy";

const WishListItem = ({ wishListItem }: WishListItemPropsType) => {
  const dispatch = useDispatch();

  const product: ProductType | undefined = productsData.find(
    (item) => item.id === wishListItem.productId
  );
  // Function to handle delete
  const onDelete = () => {
    dispatch(DELETE_Wish({ productId: wishListItem.productId }));
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
