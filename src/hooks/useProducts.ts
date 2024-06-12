import { useEffect, useState } from "react";
import { ProductType } from "../types";
import {
  brandsData,
  categoriesData,
  productsData,
  tagsData,
} from "../data/dummy";

type CategoryType = {
  id: number;
  slug: string;
  title: string;
  quantity: number;
};

type TagType = {
  id: number;
  slug: string;
  title: string;
};

type BrandType = {
  id: number;
  slug: string;
  title: string;
};

export const useProducts = (
  page: number,
  minPrice?: number | undefined,
  maxPrice?: number | undefined,
  selectedCategory: string[] = [],
  selectedTags: string[] = [],
  selectedBrand: string[] = []
) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [tags, setTags] = useState<TagType[]>([]);
  const [brands, setBrands] = useState<BrandType[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const perPage = 10;

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
