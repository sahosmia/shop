import { useParams } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { Helmet } from "react-helmet";
import { categoriesData } from "../data/dummy";
import ProductNotFound from "../components/Error/ProductNotFound";
import CustomPagination from "../components/Product/CustomPagination";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import PriceFilter from "../components/Product/PriceFilter";
import Loading from "../components/tools/Loading";
import EmptyData from "../components/tools/EmptyData";
import { IoClose } from "react-icons/io5";
import ProductItem from "../components/tools/ProductItem";
import { motion } from "framer-motion";
import { MdFilterAlt } from "react-icons/md";
import TagFilter from "../components/Product/TagFilter";

const ProductCategoryPage = () => {
  const { category_slug } = useParams<{ category_slug: string }>();
  const category = categoriesData.find((item) => item.slug === category_slug);

  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    (category && category.title) || undefined
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [filterShow, setFilterShow] = useState<boolean>(false);

  const { products, tags, loading, totalItems } = useProducts(
    page,
    minPrice,
    maxPrice,
    selectedCategory,
    selectedTags
  );

  if (!category) {
    return <ProductNotFound />;
  }

  const handleChange = (value: number) => setPage(value);
  const handleFilterToggle = () => setFilterShow(!filterShow);

  return (
    <>
      <Helmet>
        <title>{category.title} - Product Category Page</title>
        <meta
          name="description"
          content={`Find the best products in the ${category.title} category.`}
        />
      </Helmet>
      <PageBanner title={category.title} />

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
            <div className="flex space-x-5 border p-5 rounded-lg my-2">
              <TagFilter
                tags={tags}
                selectedTags={selectedTags}
                onSelectTags={setSelectedTags}
              />
              <PriceFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
              />
            </div>
          )}

          <div className="pt-5">
            {loading ? (
              <Loading />
            ) : totalItems === 0 ? (
              <EmptyData />
            ) : (
              <>
                <div className="flex gap-4 items-center justify-between pb-2">
                  <div className="flex gap-4 items-center">
                    <p className="text-assLight text-sm">
                      We found{" "}
                      <span className="text-primary font-semibold">
                        {totalItems}
                      </span>{" "}
                      items for you!
                    </p>
                    {selectedCategory && (
                      <div className="bg-red-100 flex items-center gap-1 capitalize px-4 py-2 rounded-full text-sm">
                        <button onClick={() => setSelectedCategory(undefined)}>
                          <IoClose />
                        </button>
                        {selectedCategory}
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-10">
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

                {totalItems / 6 > 1 && (
                  <CustomPagination
                    totalItems={totalItems}
                    itemsPerPage={6}
                    currentPage={page}
                    onPageChange={handleChange}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategoryPage;
