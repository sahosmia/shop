import { Helmet } from "react-helmet";

import {
  BrandBlock,
  CustomerReview,
  ExploreCollections,
  FeaturesPage,
  ProductForHomePage,
  ShopNowForHomePage,
  HeroSlider,
} from "../components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
 

  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      {/* <TempHeader /> */}
      <HeroSlider />
      <ProductForHomePage />
      <ExploreCollections />
      <ProductForHomePage />
      <ShopNowForHomePage />
      <FeaturesPage/>
      <CustomerReview />
      <BrandBlock />
    </>
  );
};

export default HomePage;
