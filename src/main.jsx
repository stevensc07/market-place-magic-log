import React from "react";
import ReactDOM from "react-dom/client";
import { MarketPlaceApp } from "./MarketPlaceApp";
import { AppProvider } from "./context/AppProvider";
import "./styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <MarketPlaceApp />
    </AppProvider>
  </React.StrictMode>
);
