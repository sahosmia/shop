import React, { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import { useProducts } from "../hooks/useProducts";
import PageBanner from "../components/PageBanner";
import ProductListContent from "../components/Product/ProductListContent";
import FilterSection from "../components/Product/FilterSection";

type FilterState = {
  minPrice: number | undefined;
  maxPrice: number | undefined;
  selectedCategory: string[];
  selectedTags: string[];
  selectedBrand: string[];
  page: number;
};

const ProductPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    minPrice: undefined,
    maxPrice: undefined,
    selectedCategory: [],
    selectedTags: [],
    selectedBrand: [],
    page: 1,
  });

  const [filterShow, setFilterShow] = useState<boolean>(false);

  const { products, tags, brands, categories, loading, totalItems } =
    useProducts(
      filters.page,
      filters.minPrice,
      filters.maxPrice,
      filters.selectedCategory,
      filters.selectedTags,
      filters.selectedBrand
    );

  const handlePageChange = (value: number) =>
    setFilters((prevFilters) => ({ ...prevFilters, page: value }));

  const handleFilterToggle = () =>
    setFilterShow((prevFilterShow) => !prevFilterShow);

  const handleFilterReset = useCallback(() => {
    setFilters({
      minPrice: undefined,
      maxPrice: undefined,
      selectedCategory: [],
      selectedTags: [],
      selectedBrand: [],
      page: 1,
    });
  }, []);

  const handlePriceChange = (
    min: number | undefined,
    max: number | undefined
  ) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: min,
      maxPrice: max,
    }));
  };

  const handleCategoryChange = (selectedCategory: string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, selectedCategory }));
  };

  const handleTagChange = (selectedTags: string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, selectedTags }));
  };

  const handleBrandChange = (selectedBrand: string[]) => {
    setFilters((prevFilters) => ({ ...prevFilters, selectedBrand }));
  };

  return (
    <>
      <Helmet>
        <title>Product Page</title>
        <meta
          name="description"
          content="Product listing page with filters and pagination."
        />
      </Helmet>

      <PageBanner title="Product Page" />

      <section>
        <div className="container py-20 gap-5">
          <FilterSection
            filterShow={filterShow}
            handleFilterToggle={handleFilterToggle}
            handleFilterReset={handleFilterReset}
            filters={filters}
            handlePriceChange={handlePriceChange}
            handleCategoryChange={handleCategoryChange}
            handleTagChange={handleTagChange}
            handleBrandChange={handleBrandChange}
            categories={categories}
            tags={tags}
            brands={brands}
          />

          <ProductListContent
            loading={loading}
            totalItems={totalItems}
            products={products}
            page={filters.page}
            handlePageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default ProductPage;
