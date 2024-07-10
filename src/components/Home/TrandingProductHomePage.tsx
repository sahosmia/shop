import { productsData } from "../../data/dummy";
import ProductSlider from "../Sliders/ProductSlider";

const TrandingProductHomePage = () => {
  const product4 = productsData.slice(0, 6);
  return (
    <ProductSlider
      products={product4}
      prevClass="c"
      nextClass="d"
      title="Tranding Product"
    />
  );
};

export default TrandingProductHomePage;
