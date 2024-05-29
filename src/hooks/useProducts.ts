import { useEffect, useState } from "react";
import { ProductType } from "../types";
import { categoriesData, productsData } from "../data/dummy";

export const useProducts = (
  page: number,
  minPrice?: number,
  maxPrice?: number,
  selectedCategory?: string
) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<
    { id: number; title: string; quantity: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const perPage = 6;

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      const filteredProducts = productsData.filter((product) => {
        return (
          (!minPrice || product.price >= minPrice) &&
          (!maxPrice || product.price <= maxPrice) &&
          (!selectedCategory || product.category === selectedCategory)
        );
      });

      setProducts(filteredProducts.slice((page - 1) * perPage, page * perPage));
      setTotalItems(filteredProducts.length);
      setCategories(
        categoriesData.map((item) => {
          const total = filteredProducts.filter(
            (product) => product.category === item.title
          ).length;
          return { ...item, quantity: total };
        })
      );
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [page, minPrice, maxPrice, selectedCategory]);

  return { products, categories, loading, totalItems };
};
