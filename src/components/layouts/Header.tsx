import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import Logo from "../tools/Logo";
import {
  MdOutlineFavoriteBorder,
  MdOutlineSearch,
  MdOutlineShoppingCart,
  MdOutlineLogin,
} from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useCarts from "../../hooks/useCarts";
import useWishLists from "../../hooks/useWishLists";
import { useDispatch } from "react-redux";
import { Logout } from "../../features/auth/authSlice";
import { CartItemReduxType, WishListItemReduxType } from "../../types";

const Header = () => {
  const carts = useCarts();
  const wishLists = useWishLists();
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userWishLists, setUserWishLists] = useState<WishListItemReduxType[]>([]);
  const [userCarts, setUserCarts] = useState<CartItemReduxType[]>([]);

  // Filter wish lists and carts based on logged-in user
  useEffect(() => {
    if (auth.user) {
      setUserWishLists(wishLists.filter(item => item.userId === auth?.user?.id));
      setUserCarts(carts.filter(item => item.userId === auth?.user?.id));
    }
  }, [auth, wishLists, carts]);

  

  // Menu list items
  const menuList = [
    { label: "My Account", url: "/profile" },
    { label: "Wish List", url: "/" },
    { label: "Cart List", url: "/" },
    { label: "Checkout", url: "/checkout" },
  ];

  // Reference for the header element
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  // Add/remove fixed class to header based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.pageYOffset > 200) {
          headerRef.current.classList.add("fixed");
        } else {
          headerRef.current.classList.remove("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle logout and navigate to login page
  const handleLogOut = () => {
    dispatch(Logout());
    navigate("/login");
  };

  return (
    <header
      ref={headerRef}
      className="border-b bg-white py-4 sm:py-6 min-h-14 top-0 left-0 right-0 z-50 transition-all duration-1000"
    >
      <div className="container flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-5">
          <Logo />
          <ul className="hidden sm:flex gap-5">
            <li>
              <Link className="font-medium text-ass" to="/">
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
        <div className="flex gap-6 sm:gap-10">
          <div className="flex items-center divide-x divide-ass">
            {/* Search Button */}
            <div className="flex items-center cursor-pointer relative mr-3">
              <MdOutlineSearch className="h-6 w-6 text-ass" />
            </div>
            {/* End Search Button */}

            <div className="flex items-center gap-4 pl-3">
              {/* Account Menu */}
              {auth.user && (
                <div className="flex items-center justify-center group relative">
                  <BiUser className="h-6 w-6 text-ass cursor-pointer" />
                  <div className="absolute invisible opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible top-full -right-1/2 bg-white shadow-sm border p-5 rounded w-48 text-black z-20 transition-all duration-300">
                    {menuList.map(menu => (
                      <div className="py-2" key={menu.label}>
                        <Link
                          className="inline text-sm py-2 text-ass hover:text-primary2 transition-all"
                          to={menu.url}
                        >
                          {menu.label}
                        </Link>
                      </div>
                    ))}
                    <div className="py-2">
                      <button
                        onClick={handleLogOut}
                        className="inline text-sm py-2 text-ass hover:text-primary2 transition-all"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* End Account Menu */}

              {/* Wish List Button */}
              <Link
                to="/wish-lists"
                className="flex items-center justify-center cursor-pointer relative"
              >
                <MdOutlineFavoriteBorder className="h-6 w-6 text-ass" />
                <span className="count-badge">{userWishLists.length}</span>
              </Link>
              {/* End Wish List Button */}

              {/* Cart Button */}
              <Link
                to="/carts"
                className="flex items-center justify-center cursor-pointer relative"
              >
                <MdOutlineShoppingCart className="h-6 w-6 text-ass" />
                <span className="count-badge">{userCarts.length}</span>
              </Link>
              {/* End Cart Button */}

              {/* Login Button */}
              {!auth.user && (
                <Link
                  to="/login"
                  className="flex items-center justify-center cursor-pointer"
                  title="Login"
                >
                  <MdOutlineLogin className="h-6 w-6 text-ass" />
                </Link>
              )}
              {/* End Login Button */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
