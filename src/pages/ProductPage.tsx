import { Helmet } from "react-helmet";
import { useCallback, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import PageBanner from "../components/PageBanner";
import PriceFilter from "../components/Product/PriceFilter";
import CategoryFilter from "../components/Product/CategoryFilter";
import { MdFilterAlt } from "react-icons/md";
import TagFilter from "../components/Product/TagFilter";
import BrandFilter from "../components/Product/BrandFilter";
import ProductListContent from "../components/Product/ProductListContent";

const ProductPage = () => {
  // State variables for filtering and pagination
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [filterShow, setFilterShow] = useState<boolean>(false);

  // Fetch products and categories using custom hook
  const { products, tags, brands, categories, loading, totalItems } =
    useProducts(
      page,
      minPrice,
      maxPrice,
      selectedCategory,
      selectedTags,
      selectedBrand
    );

  // Handle page change for pagination
  const handlePageChange = (value: number) => setPage(value);

  const handleFilterToggle = () =>
    setFilterShow((prevFilterShow) => !prevFilterShow);

  const handleFilterReset = useCallback(() => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedCategory([]);
    setSelectedBrand([]);
    setSelectedTags([]);
  }, []);
  return (
    <>
      <Helmet>
        <title>Product Page</title>
        <meta
          name="description"
          content="Product listing page with filters and pagination."
        />
      </Helmet>

      {/* Page banner component */}
      <PageBanner title="Product Page" />

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
              <TagFilter
                tags={tags}
                selectedTags={selectedTags}
                onSelectTags={setSelectedTags}
              />
              <BrandFilter
                brands={brands}
                selectedBrand={selectedBrand}
                onSelectBrand={setSelectedBrand}
              />
            </div>
          )}


          {/* Main content area */}
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

export default ProductPage;
