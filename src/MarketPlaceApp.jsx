// MarketPlaceApp.jsx
import React, { useState } from "react";
import Router from "./routers";
import { NavBar } from "./components/nav-bar/navBar";
import { Footer } from "./components";

export const MarketPlaceApp = () => {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
};
