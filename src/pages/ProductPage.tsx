import { useEffect, useRef, useState } from "react";
import PageBanner from "../components/PageBanner";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import { Helmet } from "react-helmet";
import { productsData } from "../data/dummy";
import { ProductType } from "../types";

const perPage = 12;

const ProductPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const target = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // get prev data or first data method
    const getData = () => {
      const start = perPage * page;
      const end = perPage * (page + 1);
      const data = productsData.slice(start, end);

      if (
        productsData.length === 0 ||
        productsData.length === products.length
      ) {
        setHasMore(false);
      } else {
        setTimeout(() => { // for small slow loading
          setPage((prevPage) => prevPage + 1);
          setProducts((prev) => [...prev, ...data]);
        }, 1000);
      }
    };

    const onInterSection = (items: IntersectionObserverEntry[]) => {
      const targetItem = items[0];

      if (targetItem.isIntersecting && hasMore) {
        getData();
      }
    };

    const observer = new IntersectionObserver(onInterSection);

    if (observer && target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page, products]);

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
            <ProductFilter />
            <div className="w-[2px] bg-gray-300 hidden lg:block "></div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <ProductList products={products} />

            {hasMore && (
              <p className="flex justify-center pt-20" ref={target}>
                load more....
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
