import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import CustomPagination from "../components/Product/CustomPagination";
import PageBanner from "../components/PageBanner";
import ProductItem from "../components/tools/ProductItem";
import PriceFilter from "../components/Product/PriceFilter";
import Loading from "../components/tools/Loading";
import EmptyData from "../components/tools/EmptyData";
import CategoryFilter from "../components/Product/CategoryFilter";

const ProductPage = () => {
  // State variables for filtering and pagination
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  // Fetch products and categories using custom hook
  const { products, categories, loading, totalItems } = useProducts(
    page,
    minPrice,
    maxPrice,
    selectedCategory
  );

  // Handle page change for pagination
  const handleChange = (value: number) => setPage(value);

  return (
    <>
      {/* Helmet for setting page title and meta description */}
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
        <div className="container py-20 grid grid-cols-12 gap-5">
          {/* Sidebar for filters */}
          <div className="col-span-12 lg:col-span-3 flex space-x-5">
            <div>
              {/* Category filter component */}
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              {/* Price filter component */}
              <PriceFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
              />
            </div>
            <div className="w-[1px] bg-primary2 hidden lg:block"></div>
          </div>

          {/* Main content area */}
          <div className="col-span-12 lg:col-span-9">
            {loading ? (
              <Loading />
            ) : totalItems === 0 ? (
              <EmptyData />
            ) : (
              <>
                <div className="flex gap-4 items-center pb-2">
                  {/* Display total number of products */}
                  <p>Total Products {totalItems}</p>

                  {/* Selected category badge with remove button */}
                  {selectedCategory && (
                    <div className="bg-red-100 flex items-center gap-1 capitalize px-4 py-2 rounded-full text-sm">
                      <button onClick={() => setSelectedCategory("")}>
                        <IoClose />
                      </button>
                      {selectedCategory}
                    </div>
                  )}
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10">
                  {products.map((product) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      key={product.id}

                    >
                      <ProductItem product={product} />
                    </motion.div>
                  ))}
                </div>

                {/* Custom pagination component */}
                <CustomPagination
                  totalItems={totalItems}
                  itemsPerPage={6}
                  currentPage={page}
                  onPageChange={handleChange}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
