import { useEffect, useState } from "react";
import PageBanner from "../components/PageBanner";
import ProductList from "../components/ProductList";
import { Helmet } from "react-helmet";
import { categoriesData, productsData } from "../data/dummy";
import { ProductType } from "../types";
import CustomPagination from "../components/CustomPagination";
import { IoClose } from "react-icons/io5";

const ProductPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<
    { id: number; title: string; quantity: number }[]
  >([]);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const perPage = 6;
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    // Filter products based on minPrice and maxPrice
    const filteredProducts = productsData.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (selectedCategory === "" || product.category === selectedCategory)
      );
    });

    // Slice the products based on pagination
    const timeoutId = setTimeout(() => {
      setProducts(filteredProducts.slice((page - 1) * perPage, perPage * page));
      setTotalItems(filteredProducts.length);
      setLoading(false);
      setCategories(
        categoriesData.map((item) => {
          const total = filteredProducts.filter(
            (pro) => pro.category === item.title
          ).length;
          return { ...item, quantity: total };
        })
      );
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [page, minPrice, maxPrice, selectedCategory]);

  const handleChange = (value: number) => {
    setPage(value);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(e.target.value));
  };
  const handleSelectedCategoryChange = (title: string) => {
    setSelectedCategory(title);
  };

  return (
    <>
      <Helmet>
        <title>ProductPage</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <PageBanner title="Product Page" />

      <section>
        <div className="container py-20 grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-3 flex space-x-5">
            <div>
              <h4>Filter</h4>
              <div className="pb-20">
                <h6>Category</h6>
                <ul>
                  {categories.map((category) => (
                    <li
                      className={`${
                        selectedCategory === category.title
                          ? "text-red-500"
                          : ""
                      } hover:text-red-500 transition`}
                      key={category.id}
                    >
                      <button
                        className="capitalize text-sm font-semibold flex justify-between gap-5"
                        type="button"
                        onClick={() =>
                          handleSelectedCategoryChange(category.title)
                        }
                      >
                        <div className="inline-block">{category.title}</div>{" "}
                        <div className="inline-block">({category.quantity})</div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-2">
                <div className="flex-1">
                  <label htmlFor="min">Min</label>
                  <input
                    type="number"
                    id="min"
                    value={minPrice || ""}
                    onChange={handleMinPriceChange}
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="max">Max</label>
                  <input
                    type="number"
                    id="max"
                    value={maxPrice || ""}
                    onChange={handleMaxPriceChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-[2px] bg-gray-300 hidden lg:block"></div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            {loading ? (
              <h1>loading...</h1>
            ) : totalItems === 0 ? (
              <div>
                <p>No data here</p>
              </div>
            ) : (
              <>
                <div className="flex gap-4 items-center pb-2">
                  <p>Total Products {totalItems}</p>
                  {selectedCategory && (
                    <div className="bg-red-100 flex items-center gap-1 capitalize px-4 py-2 rounded-full text-sm">
                      <button
                        className=""
                        onClick={() => {
                          setSelectedCategory("");
                        }}
                      >
                        <IoClose />
                      </button>{" "}
                      {selectedCategory}
                    </div>
                  )}
                </div>
                <ProductList products={products} />
                <CustomPagination
                  totalItems={totalItems}
                  itemsPerPage={perPage}
                  currentPage={page}
                  onPageChange={handleChange}
                />
                <h2>Data ase</h2>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
