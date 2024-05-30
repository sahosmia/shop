import { useEffect, useState } from "react";
import { ProductType } from "../types";
import {
  brandsData,
  categoriesData,
  productsData,
  tagsData,
} from "../data/dummy";

export const useProducts = (
  page: number,
  minPrice?: number,
  maxPrice?: number,
  selectedCategory: string[] = [],
  selectedTags: string[] = [],
  selectedBrand: string[] = []
) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<
    { id: number; slug: string; title: string; quantity: number }[]
  >([]);
  const [tags, setTags] = useState<
    { id: number; slug: string; title: string }[]
  >([]);
  const [brands, setBrands] = useState<
    { id: number; slug: string; title: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const perPage = 6;
  useEffect(() => {
    setTags(tagsData);
    setBrands(brandsData);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      const filteredProducts = productsData.filter((product) => {
        const matchesPrice =
          (!minPrice || product.price >= minPrice) &&
          (!maxPrice || product.price <= maxPrice);
        const matchesCategory =
          selectedCategory.length === 0 ||
          selectedCategory.includes(product.category);
        const matchesTags =
          selectedTags.length === 0 ||
          // selectedTags.every((tag) => product.tags.includes(tag));
          selectedTags.some((tag) => product.tags.includes(tag));
        const matchesBrand =
          selectedBrand.length === 0 || selectedBrand.includes(product.brand);
        return matchesPrice && matchesCategory && matchesTags && matchesBrand;
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
  }, [page, minPrice, maxPrice, selectedCategory, selectedTags, selectedBrand]);

  return { products, categories, tags, brands, loading, totalItems };
};
