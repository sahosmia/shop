import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { CartItemType } from "../../types";

const Header = () => {
  const { carts }: { carts: CartItemType[] } = useCartContext() ?? { carts: [] };

  return (
    <header className="bg-primary-400 text-white h-16">
      <div className="container flex justify-between items-center h-full">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Category</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
            <li>
              <Link to="/carts" className=" relative">
                <span className="text-2xl">
                  <BiCart />
                </span>{" "}
                {carts.length !== 0 && (
                  <span className=" absolute -top-1 -right-1 text-xs font-medium bg-purple-600 rounded-full w-4 h-4 grid place-content-center">
                    {carts.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <BiCart />
    </header>
  );
};

export default Header;
