export type PageBannerType = {
  title: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type CartProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity:number
};

export type ProductPropsType = {
  product: ProductType;
};
export type ProductsPropsType = {
  products: ProductType[];
};

export type CartItemType = {
  id: number;
  productId: number;
  quantity: number;
};

export type CartItemReduxType = {
  id: number;
  productId: number;
  quantity: number;
};

export type Feature = {
  id: number;
  icon: "support" | "moneyBack" | "shipping" | "guarantee";
  heading: string;
  description: string;
}

export type CardItemPropsType = {
  cartItem: CartItemType;
  onStockError:(status:boolean) => void;
};

export type CartReducerAction =
  | { type: "ADD_CART";  productId: number; quantity: number }
  | { type: "UPDATE_QUANTITY_CART"; id: number; quantity: number }
  | { type: "DELETE_CART"; productId: number };

export type CuponType = {
  id: number;
  code: string;
  discount: number;
};
