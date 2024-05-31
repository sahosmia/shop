import { MouseEvent } from "react";
import { ProductType } from "../../types";
import ProductDetailsImage from "../ProductDetails/ProductDetailsImage";
import ProductInfo from "../ProductDetails/ProductInfo";

interface ProductQuickViewProps {
  handleQuickViewClose: (e: MouseEvent<HTMLDivElement>) => void;
  product: ProductType;
}
const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  handleQuickViewClose,
  product,
}) => {
  return (
    <div
      id="settings-sidebar"
      onClick={handleQuickViewClose}
      className=" z-50 fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black bg-opacity-40 flex-center"
    >
      <div className="container rounded bg-white flex gap-20 p-10">
        <ProductDetailsImage product={product} />

        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductQuickView;
