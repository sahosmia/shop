import { useEffect, useState } from "react";
import { ProductType } from "../types";
import { categoriesData, productsData, tagsData } from "../data/dummy";

export const useProducts = (
  page: number,
  minPrice?: number,
  maxPrice?: number,
  selectedCategory?: string,
  selectedTags: string[] = []
) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<
    { id: number; slug: string; title: string; quantity: number }[]
  >([]);
  const [tags, setTags] = useState<
    { id: number; slug: string; title: string; quantity: number }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const perPage = 6;

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      const filteredProducts = productsData.filter((product) => {
        const matchesPrice =
          (!minPrice || product.price >= minPrice) &&
          (!maxPrice || product.price <= maxPrice);
        const matchesCategory =
          !selectedCategory || product.category === selectedCategory;
        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.every((tag) => product.tags.includes(tag));

        return matchesPrice && matchesCategory && matchesTags;
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

      setTags(
        tagsData.map((item) => {
          const total = filteredProducts.filter((product) =>
            product.tags.includes(item.title)
          ).length;
          return { ...item, quantity: total };
        })
      );

      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [page, minPrice, maxPrice, selectedCategory, selectedTags]);

  return { products, categories, tags, loading, totalItems };
};
