import React, { useEffect, useState, useReducer } from "react";
import { AppContext } from "./AppContext";
import { AppReducer } from "./AppReducer";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    token: null,
    firstName: null,
  });
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const firstName = localStorage.getItem("firstName");
    const profile = localStorage.getItem("profile");

    if (token && firstName) {
      dispatch({ type: "LOGIN_SUCCESS", payload: { token, firstName } });
      setIsLogged(true);
    }
    setRole(profile);
  }, []);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    setIsLogged(false);
    window.location.reload();
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        role,
        setRole,
        isLogged,
        setIsLogged,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
