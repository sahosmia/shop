import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Helmet } from "react-helmet";
import { tagsData } from "../data/dummy";
import ProductNotFound from "../components/Error/ProductNotFound";
import { useMemo, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import PriceFilter from "../components/Product/PriceFilter";
import { MdFilterAlt } from "react-icons/md";
import CategoryFilter from "../components/Product/CategoryFilter";
import BrandFilter from "../components/Product/BrandFilter";
import ProductListContent from "../components/Product/ProductListContent";

const ProductTagPage = () => {
  const { tag_slug } = useParams<{ tag_slug: string }>();
  const tag = tagsData.find((item) => item.slug === tag_slug);

  

  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const selectedTag = useMemo(() => (tag && [tag.title]) || [], [tag]);

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [filterShow, setFilterShow] = useState<boolean>(false);

  const { products, categories, brands, loading, totalItems } = useProducts(
    page,
    minPrice,
    maxPrice,
    selectedCategory,
    selectedTag,
    selectedBrand
  );

  if (!tag) {
    return <ProductNotFound />;
  }

  const handlePageChange = (value: number) => setPage(value);
  const handleFilterToggle = () => setFilterShow(!filterShow);
  const handleFilterReset = () => {
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSelectedCategory([]);
    setSelectedBrand([]);
  };

  return (
    <>
      <Helmet>
        <title>{tag.title} - Product Tag Page</title>
        <meta
          name="description"
          content={`Find the best products in the ${tag.title} category.`}
        />
      </Helmet>
      <PageBanner title={`Tag : ${tag.title}`} />

      <section>
        <div className="container py-20 gap-5">
          <div>
            <button
              onClick={handleFilterToggle}
              className="flex justify-center items-center border px-5 py-2 rounded gap-1 text-sm"
            >
              <MdFilterAlt /> Filter
            </button>
          </div>
          {filterShow && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-x-5 border p-5 rounded-lg my-2">
              <div>
                <PriceFilter
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onMinPriceChange={setMinPrice}
                  onMaxPriceChange={setMaxPrice}
                />
                <button onClick={handleFilterReset}>Reset Filter</button>
              </div>

              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <BrandFilter
                brands={brands}
                selectedBrand={selectedBrand}
                onSelectBrand={setSelectedBrand}
              />
            </div>
          )}

          <ProductListContent
            loading={loading}
            totalItems={totalItems}
            products={products}
            page={page}
            handlePageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default ProductTagPage;
