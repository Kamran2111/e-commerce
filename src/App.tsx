import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout ";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const CartPage = lazy(() => import("./components/Cart/Cart"));
const SeeCollectionPage = lazy(() => import("./pages/SeeCollectionPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-[100vh] text-[50px]">
          ...Loading
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<SignInPage />} />
          <Route path="/регистрация" element={<SignUpPage />} />
          <Route path="/главная" element={<HomePage />} />
          <Route path="/контакты" element={<ContactsPage />} />
          <Route path="/онас" element={<AboutUsPage />} />
          <Route path="/корзина" element={<CartPage />} />
          <Route path="/коллекция" element={<SeeCollectionPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/избранные" element={<FavoritePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
