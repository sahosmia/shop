import { productsData } from "../../data/dummy";
import ProductSlider from "../Sliders/ProductSlider";

const PopulerProductHomePage = () => {
  const product4 = productsData.slice(0, 6);
  return (
    <ProductSlider
      products={product4}
      prevClass="populer-prev"
      nextClass="populer-next"
      title="Populer Product"
    />
  );
};

export default PopulerProductHomePage;
