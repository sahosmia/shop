import { productsData } from "../../data/dummy";
import ProductItem from "../tools/ProductItem";
const ProductForHomePage = () => {

  const product4 = productsData.slice(0, 4);

  return (
    <div>
      <div className="container">
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  my-10">
          {product4.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductForHomePage;
