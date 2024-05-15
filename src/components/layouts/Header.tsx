import { Link } from "react-router-dom";
import { CartItemReduxType } from "../../types";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import { useEffect, useRef } from "react";
import Logo from "../tools/Logo";
import {
  MdOutlineFavoriteBorder,
  MdOutlineSearch,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Header = () => {
  const carts = useSelector(
    (state: { carts: CartItemReduxType[] }) => state.carts
  );
  const menuList = [
    { label: "My Acount", url: "/", auth: true },
    { label: "Login", url: "/" },
    { label: "Wish List", url: "/", auth: true },
    { label: "Cart List", url: "/", auth: true },
    { label: "Checkout", url: "/checkout", auth: true },
    { label: "Log Out", url: "/" },
  ];

  const headerRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const position = window.pageYOffset;
      if (headerRef.current) {
        if (position > 200) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }
      }
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className=" border-b bg-white  py-6 min-h-14  top-0 left-0 right-0 z-10 transition-all duration-1000"
    >
      <div className="container flex justify-between items-center h-full">
        <div className="flex items-center gap-5">
          <Logo />
          <ul className="flex gap-5">
            <li>
              <Link className=" font-medium text-ass" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="font-medium text-ass" to="/products">
                Product
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-10">
          <div className="flex  items-center divide-x divide-ass ">
            <div className="flex item-center cursor-pointer relative mr-3">
              <MdOutlineSearch className="h-6 w-6 text-ass" />
            </div>
            <div className="flex items-center gap-4 pl-3">
              <div className="flex items-center justify-center  group relative">
                <BiUser className="h-6 w-6 text-ass cursor-pointer" />
                <div className=" absolute invisible opacity-0 translate-y-5 group-hover:translate-y-0  group-hover:opacity-100 group-hover:visible top-full -right-1/2 bg-white shadow-sm border p-5 rounded w-48 text-black z-20 transition-all duration-300">
                  {menuList.map((menu) => (
                    <div className="py-2" key={menu.label}>
                      <Link
                        className="inline text-sm text-ass hover:text-primary2 transition-all"
                        to={menu.url}
                      >
                        {menu.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <MdOutlineFavoriteBorder className="h-6 w-6 text-ass" />
              </div>
              <Link
                to="/carts"
                className="flex items-center justify-center cursor-pointer relative"
              >
                <MdOutlineShoppingCart className="h-6 w-6 text-ass" />
                <span className="bg-primary text-white absolute -top-[9px] -right-2 w-5 h-5 text-xs font-medium rounded-full grid place-content-center">
                  {carts.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
