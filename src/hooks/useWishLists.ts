import { useSelector } from "react-redux";
import { WishListItemReduxType } from "../types";

const useWishLists = () => {
  const wishLists = useSelector(
    (state: { wishLists: WishListItemReduxType[] }) => state.wishLists
  );
  return wishLists;
};

export default useWishLists;
