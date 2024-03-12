import React, { useEffect } from "react";
import { AdminDashboard } from "../components";
import { NavBar } from "../components/nav-bar/navBar";
export const Admin = ({ onHideNavBar }) => {
  useEffect(() => {
    onHideNavBar();
  }, []);

  return (
    <>
      <AdminDashboard />
    </>
  );
};
