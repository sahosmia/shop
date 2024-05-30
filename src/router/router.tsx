import { Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import {
  CartPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductPage,
  ProfilePage,
  WishListPage,
} from "../pages";
import PrivateRoute from "../components/layouts/PrivateRoute";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductBrandPage from "../pages/ProductBrandPage";
import ProductTagPage from "../pages/ProductTagPage";

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
