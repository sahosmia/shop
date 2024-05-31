import { productsData } from "../../data/dummy";
import { ProductPropsType, ProductType } from "../../types";
import ProductItem from "../tools/ProductItem";



const RelatedProducts = ({ product }: ProductPropsType) => {
  // Dummy logic to fetch related products (e.g., products from the same category)
  const categoryRelatedProducts = productsData.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const brandRelatedProducts = productsData.filter(
    (item) => item.brand === product.brand && item.id !== product.id
  );

  // Dummy logic to fetch related products based on tags
  const tagRelatedProducts = productsData.filter(
    (item) =>
      item.tags.some((tag) => product.tags.includes(tag)) &&
      item.id !== product.id
  );

  return (
    <>
      {/* Display Category Related Products */}
      <RelatedProductItem
        title="Category"
        products={categoryRelatedProducts}
      ></RelatedProductItem>

      {/* Display Brand Related Products */}
      <RelatedProductItem
        title="Brand"
        products={brandRelatedProducts}
      ></RelatedProductItem>

      {/* Display Tag-Related Products */}
      <RelatedProductItem
        title="Tag"
        products={tagRelatedProducts}
      ></RelatedProductItem>
    </>
  );
};

function RelatedProductItem({
  title,
  products,
}: {
  title: string;
  products: ProductType[];
}) {
  return (
    <div>
      {products.length > 0 && (
        <div className=" container ">
          <h2 className="text-2xl font-semibold mb-4">
            {title} Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {products.slice(0, 4).map((relatedProduct) => (
              <ProductItem key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RelatedProducts;
