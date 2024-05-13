import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CartItemReduxType } from "../../types";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const carts = useSelector(
    (state: { carts: CartItemReduxType[] }) => state.carts
  );
  const [profileDropdownShow, setProfileDropDownShow] = useState(false);
  const menuList = [
    { menu: "My Acount", url: "/", auth: true },
    { menu: "Login", url: "/" },
    { menu: "Wish List", url: "/", auth: true },
    { menu: "Cart List", url: "/", auth: true },
    { menu: "Checkout", url: "/checkout", auth: true },
    { menu: "Log Out", url: "/" },
  ];
  const userIconRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        !menuRef.current.contains(e.target) &&
        !userIconRef.current.contains(e.target)
      ) {
        setProfileDropDownShow(false);
      }
    };

    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);
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
              <Link to="/products">Product</Link>
            </li>
            <li>
              <Link to="/carts" className=" relative">
                <span className="text-2xl">
                  <BiCart />
                </span>{" "}
                {carts.length !== 0 && (
                  <span className=" absolute -top-1 -right-1 text-xs  bg-purple-600 rounded-full w-4 h-4 grid place-content-center">
                    {carts.length}
                  </span>
                )}
              </Link>
            </li>

            <li className="relative">
              <div
                className=" inline-block text-2xl"
                onClick={() => setProfileDropDownShow(!profileDropdownShow)}
                ref={userIconRef}
              >
                <BiUser />
              </div>
              {profileDropdownShow && (
                <div
                  ref={menuRef}
                  className=" absolute right-[0%] bg-gray-200 p-5 rounded w-40 text-black"
                >
                  {menuList.map((menu) => (
                    <Link
                      key={menu.menu}
                      className="block text-sm font-medium"
                      to={menu.url}
                    >
                      {menu.menu}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
