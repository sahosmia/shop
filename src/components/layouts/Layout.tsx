import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { useCartContext } from "../../context/CartContext";

const Layout = () => {

  const {carts} = useCartContext()
  
  return (
    <>
    <Helmet>
      <title>Shop</title>
      <meta name="description" content="Anything will never seo." />
    </Helmet>
    
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
