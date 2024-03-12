import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Catalog } from "../pages/Catalog";
import { Product } from "../pages/Product";
import { Login } from "../pages/Login";
import { Bag } from "../pages/Bag";
import { Admin } from "../pages/Admin";
import { NavBar } from "../components/nav-bar/navBar";
import { AppContext } from "../context/AppContext";

function Router() {
  const { isLogged } = React.useContext(AppContext);
  const [showNavBar, setShowNavBar] = useState(true);

  return (
    <BrowserRouter>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={<Admin onHideNavBar={() => setShowNavBar(false)} />}
        />
        <Route
          path="/shoppingcart"
          element={isLogged ? <Bag /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
