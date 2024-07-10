import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  PopulerProductHomePage,
  TrandingProductHomePage,
  HeroSlider,
  BottomToTop,
  Brand,
  Testimonials,
} from "../components/Home";
import StoreBanner from "../components/Home/StoreBanner";
import CategoryList from "../components/Home/CategoryList";
import CustomHelmet from "../components/tools/CustomHelmet";

const HomePage = () => {
  return (
    <>
      <CustomHelmet title="Home Page" description="Anything will never seo." />
      <HeroSlider />
      <CategoryList />
      <PopulerProductHomePage />
      <StoreBanner />
      <TrandingProductHomePage />
      <Testimonials />
      <Brand />
      <BottomToTop />
    </>
  );
};

export default HomePage;
