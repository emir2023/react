import React from "react";
import AboutUsPage from "./AboutUsPage";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
