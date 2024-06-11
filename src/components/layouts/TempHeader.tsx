import { CgProfile } from "react-icons/cg";
import {
  MdOutlineFavoriteBorder,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";

const TempHeader = () => {
  return (
    <div className="container h-[74px] flex items-center justify-between py-5 ">
      <div className="flex item-center  justify-evenly">
        <div className="text-3xl font-bold  ">
          <Link to="">Logo </Link>
        </div>

        <div className="flex items-center ml-20 text-2xl">Product</div>
      </div>

      <div className="flex  items-center gap-12  ">
        <div className="flex item-center cursor-pointer relative">
          <MdOutlineSearch className="h-[24px] w-[24px] black" />
          <div className="line absolute bg-black w-px h-6 -right-6"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center cursor-pointer">
            <CgProfile className="h-6 w-6  " />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <MdOutlineFavoriteBorder className="h-6 w-6  " />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <MdOutlineShoppingCart className="h-6 w-6 black " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempHeader;
