import { Helmet } from "react-helmet";

import {
  // ExploreCollections,
  ProductForHomePage,
  // ShopNowForHomePage,
  HeroSlider,
  BottomToTop,
  Brand,
  Testimonials,
} from "../components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoreBanner from "../components/Home/StoreBanner";
import CategoryList from "../components/Home/CategoryList";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      {/* <TempHeader /> */}
      <HeroSlider />
      <CategoryList/>
      <ProductForHomePage />
      <StoreBanner/>

      {/* <ExploreCollections /> */}
      <ProductForHomePage />
      {/* <ShopNowForHomePage /> */}
      <Testimonials />
      <Brand />

      <BottomToTop />
    </>
  );
};

export default HomePage;
