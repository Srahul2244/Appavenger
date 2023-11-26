import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingMain from "./LandingMain";
import Products from "../Pages/Products";
import SinglePage from "../Pages/SinglePage";
import Cart from "./Cart";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingMain />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<SinglePage />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
