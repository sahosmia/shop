import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import FeaturesSection from "./FeaturesSection";

const Layout = () => {

  
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
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default Layout;
