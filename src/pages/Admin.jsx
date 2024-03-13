import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { AdminDashboard } from "../components";

export const Admin = ({ onHideNavBar }) => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    onHideNavBar();
    const roleFromLocalStorage = localStorage.getItem("role");
    if (roleFromLocalStorage) {
      setRole(roleFromLocalStorage);
    }
  }, [onHideNavBar]);

  return (
    <div>
      {role && role === "admin" ? (
        <div>
          <AdminDashboard />
        </div>
      ) : (
        <div>
          <h1>Access Denied</h1>
          <p>You don't have permission to access this page.</p>
        </div>
      )}
    </div>
  );
};
