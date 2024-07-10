import { productsData } from "../../data/dummy";
import ProductSlider from "../Sliders/ProductSlider";

const PopulerProductHomePage = () => {
  const product4 = productsData.slice(0, 6);
  return (
    <ProductSlider
      products={product4}
      prevClass="a"
      nextClass="b"
      title="Populer Product"
    />
  );
};

export default PopulerProductHomePage;
