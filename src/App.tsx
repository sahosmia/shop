import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import {
  CartPage,
  CheckoutPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductPage,
  ProfilePage,
  WishListPage,
} from "./pages";

import { Provider } from "react-redux";
import store from "./app/store.ts";
import PrivateRoute from "./components/layouts/PrivateRoute.tsx";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/:productId" element={<ProductDetailsPage />} />
          <Route path="carts" element={<CartPage />} />
          <Route path="wish-lists" element={<WishListPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="checkout" element={<CheckoutPage />} />

            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Route>
          <Route path="login" element={<LoginPage />} />
      </Routes>
    </Provider>
  );
};

export default App;
