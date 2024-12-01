import React from "react";
import { Navigate } from "react-router-dom";
import Weather from "./Weather/Weather";
const ProtectedRoute = () => {
  const isRegister = JSON.parse(localStorage.getItem("isRegister"));
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
//   const Username = localStorage.getItem("Username");
  const isAuthenticated = () => {
    if (isRegister || isLogin) {
      return true;
    } else {
      return false;
    }
  };
  return isAuthenticated ? <Weather /> : <Navigate to="/" />;
};
export default ProtectedRoute;
