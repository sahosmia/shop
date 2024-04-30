import { Link } from "react-router-dom";

const Header = () => {
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
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
