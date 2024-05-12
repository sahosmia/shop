import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layouts/Layout";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CategoryPage from "./pages/CategoryPage";
import CategorySinglePage from "./pages/CategorySinglePage";

import { Provider } from "react-redux";
import store from "./app/store.ts";

const App = () => {
  return (
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<ProductPage />} />
            <Route
              path="products/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="categories" element={<CategoryPage />} />
            <Route path="categories/:slug" element={<CategorySinglePage />} />
            <Route path="carts" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />

            <Route path="login" element={<LoginPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Provider>
  );
};

export default App;
