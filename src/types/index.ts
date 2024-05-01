export type PageBannerType = {
  title: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number | null;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductSingleType = {
  product: ProductType | undefined;
};

export type ProductsPropsType = {
  products: ProductType[];
};
export type CardItemPropsType = {
  product: ProductType | undefined;
  onDelete: (id:number) => void;
};
