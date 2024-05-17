import { Helmet } from "react-helmet";
import TempHeader from "../components/layouts/TempHeader";
import BrandBlock from "./BrandBlock";
import CustomerReview from "./CustomerReview";
import ExploreCollections from "./ExploreCollections";
import FeaturesPage from "./FeaturesPage";
import ProductForHomePage from "./ProductForHomePage";
import ShopNowForHomePage from "./ShopNowForHomePage";
import CartPageDemo from "./CartPageDemo";

const HomePage = () => {
  const features = [
    {
      icon: "support",
      heading: "24/7 Customer Service",
      description:
        "We are here to help you around the clock. Reach out anytime, day or night.",
    },
    {
      icon: "money-back",
      heading: "14-Day Money Back",
      description:
        "Not satisfied with your purchase? We offer a 14-day money-back guarantee.",
    },
    {
      icon: "shipping",
      heading: "Shipping Worldwide",
      description:
        "We ship to over 100 countries, so you can enjoy our products wherever you are.",
    },
    {
      icon: "guarantee",
      heading: "Our Guarantee",
      description:
        "We stand behind the quality of our products and guarantee your satisfaction.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <div>HomePage</div>
      <TempHeader />
      <ProductForHomePage />
      <ExploreCollections />
      <ProductForHomePage />
      <ShopNowForHomePage />
      <FeaturesPage features={features} />
      <CustomerReview />
      <BrandBlock />
      <CartPageDemo/>
    </>
  );
};

export default HomePage;
