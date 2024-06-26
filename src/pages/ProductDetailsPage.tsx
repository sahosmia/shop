import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { productsData } from "../data/dummy";
import ProductNotFound from "../components/Error/ProductNotFound";
import { ProductType } from "../types";
import ProductDescriptionReviews from "../components/ProductDetails/ProductDescriptionReviews";
import ProductDetailsImage from "../components/ProductDetails/ProductDetailsImage";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import PageBanner from "../components/PageBanner";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Example side effect: logging the productId change
    const data = productsData.find(
      (item) => productId && item.id === parseInt(productId)
    );
    if (data) {
      setProduct(data);
    }

    setLoading(false);
  }, [productId]);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - Product Details</title>
        <meta
          name="description"
          content={`Discover details about ${product.title}. ${product.description}`}
        />
      </Helmet>
      <PageBanner title={product.title} />

      <section className="py-20">
        <div className="container mx-auto flex flex-col lg:flex-row gap-20">
          <ProductDetailsImage product={product} />
          <ProductInfo product={product} />
        </div>
        <ProductDescriptionReviews product={product} />

        <RelatedProducts product={product} />
      </section>
    </>
  );
};

export default ProductDetailsPage;
