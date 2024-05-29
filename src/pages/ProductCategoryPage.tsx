import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Helmet } from "react-helmet";
import { categoriesData } from "../data/dummy";
import ProductNotFound from "../components/Error/ProductNotFound";

const ProductCategoryPage = () => {
  // parameter from the URL
  const { category_slug } = useParams<{ category_slug: string }>();

  // If the category_slug is not present, show the ProductNotFound component
  if (!category_slug) {
    return <ProductNotFound />;
  }

  // Find the category data that matches the category_slug
  const category = categoriesData.find((item) => item.slug === category_slug);

  // If the category is not found, show the ProductNotFound component
  if (!category) {
    return <ProductNotFound />;
  }

  return (
    <>
      <Helmet>
        <title>{category.title} - Product Category Page</title>
        <meta name="description" content={`Find the best products in the ${category.title} category.`} />
      </Helmet>
      <PageBanner title={category.title} />

      <div>{category_slug}</div>
    </>
  );
};

export default ProductCategoryPage;
