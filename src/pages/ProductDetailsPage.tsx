import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { productsData } from "../data/dummy";
import ProductNotFound from "../components/Error/ProductNotFound";
import { ProductType } from "../types";
import ProductDescriptionReview from "../components/ProductDetails/ProductDescriptionReview";
import ProductDetailsImage from "../components/ProductDetails/ProductDetailsImage";
import ProductInfo from "../components/ProductDetails/ProductInfo";

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product: ProductType | undefined = productsData.find(
    (item) => productId && item.id === parseInt(productId)
  );

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>ProductDetailsPage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <section className="py-20">
        <div className="container flex-col lg:flex-row flex gap-20">
          <ProductDetailsImage product={product} />

          <ProductInfo product={product} />
        </div>

        <ProductDescriptionReview />
      </section>
    </>
  );
};

export default ProductDetailsPage;
