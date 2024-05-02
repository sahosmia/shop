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

export type ProductSingleType = {
  product: ProductType | undefined;
};

export type ProductsPropsType = {
  products: ProductType[];
};
export type CardItemPropsType = {
  product: ProductType | undefined;
  onDelete: (id: number) => void;
};

export type CartsType = {
  carts: number[];
};

export const enum Cart_Reducer_Action_Type {
  ADD_CART,
  DELETE_CART,
}

export type CartReducerAction = {
  type: Cart_Reducer_Action_Type;
  id: number;
};

export type CartsContextType = {
  carts: number[];
  dispatch: () => void;
};

export type CuponType = {
  id: number;
  code: string;
  discount: number;
};
