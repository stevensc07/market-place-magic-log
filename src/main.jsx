import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { MarketPlaceApp } from "./MarketPlaceApp";
import { AppProvider } from "./context/AppProvider";
import "./styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <MarketPlaceApp />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
