import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { categoriesData } from "../data/dummy";
import ProductNotFound from "../components/Error/ProductNotFound";
import { useCallback, useMemo, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import PriceFilter from "../components/Product/PriceFilter";
import { MdFilterAlt } from "react-icons/md";
import ProductListContent from "../components/Product/ProductListContent";
import FilterItem from "../components/Product/FilterItem";
import CustomHelmet from "../components/tools/CustomHelmet";

const ProductCategoryPage = () => {
  const { category_slug } = useParams<{ category_slug: string }>();
  const category = categoriesData.find((item) => item.slug === category_slug);

  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const selectedCategory = useMemo(
    () => (category && [category.title]) || [],
    [category]
  );

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [filterShow, setFilterShow] = useState<boolean>(false);

  const { products, tags, brands, loading, totalItems } = useProducts(
    page,
    minPrice,
    maxPrice,
    selectedCategory,
    selectedTags,
    selectedBrand
  );

  const handlePageChange = (value: number) => setPage(value);
  const handleFilterToggle = () => setFilterShow(!filterShow);
  const handleFilterReset = useCallback(() => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedBrand([]);
    setSelectedTags([]);
  }, []);
  
  if (!category) {
    return <ProductNotFound />;
  }
  return (
    <>
      <CustomHelmet
        title={`${category.title} - Product Category Page`}
        description={`Find the best products in the ${category.title} category.`}
      />
      <PageBanner title={`Category : ${category.title}`} />

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
              <FilterItem
                items={tags}
                selectedItems={selectedTags}
                onSelectItem={setSelectedTags}
                title="Tags"
              />

              <FilterItem
                items={brands}
                selectedItems={selectedBrand}
                onSelectItem={setSelectedBrand}
                title="Brands"
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

export default ProductCategoryPage;
