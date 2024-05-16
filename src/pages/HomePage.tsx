import { Helmet } from "react-helmet";

import {
  CustomerReview,
  ExploreCollections,
  FeaturesPage,
  ProductForHomePage,
  ShopNowForHomePage,
  HeroSlider,
  BottomToTop,
  Brand,
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
      <Brand />
      <BottomToTop/>
    </>
  );
};

export default HomePage;
