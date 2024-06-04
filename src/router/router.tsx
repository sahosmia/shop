import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import loadable from "@loadable/component";
import PrivateRoute from "../components/layouts/PrivateRoute";

const HomePage = loadable(() => import("../pages/HomePage"));
const ProductPage = loadable(() => import("../pages/ProductPage"));
const ProductDetailsPage = loadable(
  () => import("../pages/ProductDetailsPage")
);
const ProductCategoryPage = loadable(
  () => import("../pages/ProductCategoryPage")
);
const ProductBrandPage = loadable(() => import("../pages/ProductBrandPage"));
const ProductTagPage = loadable(() => import("../pages/ProductTagPage"));
const CheckoutPage = loadable(() => import("../pages/CheckoutPage"));
const WishListPage = loadable(() => import("../pages/WishListPage"));
const CartPage = loadable(() => import("../pages/CartPage"));
const LoginPage = loadable(() => import("../pages/LoginPage"));
const ProfilePage = loadable(() => import("../pages/ProfilePage"));
const NotFoundPage = loadable(() => import("../pages/NotFoundPage"));


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/:productId" element={<ProductDetailsPage />} />
        <Route
          path="products/category/:category_slug"
          element={<ProductCategoryPage />}
        />
        <Route
          path="products/brand/:brand_slug"
          element={<ProductBrandPage />}
        />
        <Route path="products/tag/:tag_slug" element={<ProductTagPage />} />
        <Route path="carts" element={<CartPage />} />
        <Route path="wish-lists" element={<WishListPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
