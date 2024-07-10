import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { tagsData } from "../data/dummy";
import ProductNotFound from "../components/Error/ProductNotFound";
import { useCallback, useMemo, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import PriceFilter from "../components/Product/PriceFilter";
import { MdFilterAlt } from "react-icons/md";
import ProductListContent from "../components/Product/ProductListContent";
import FilterItem from "../components/Product/FilterItem";
import CustomHelmet from "../components/tools/CustomHelmet";

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

  const handlePageChange = (value: number) => setPage(value);
  const handleFilterToggle = () => setFilterShow(!filterShow);
  const handleFilterReset = useCallback(() => {
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSelectedCategory([]);
    setSelectedBrand([]);
  }, []);

  if (!tag) {
    return <ProductNotFound />;
  }

  return (
    <>
      <CustomHelmet
        title={`${tag.title} - Product Tag Page`}
        description={`Find the best products in the ${tag.title} tag.`}
      />
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

              <FilterItem
                items={categories}
                selectedItems={selectedCategory}
                onSelectItem={setSelectedCategory}
                title="Category"
              />
              <FilterItem
                items={brands}
                selectedItems={selectedBrand}
                onSelectItem={setSelectedBrand}
                title="Tags"
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
