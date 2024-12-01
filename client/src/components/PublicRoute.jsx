import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isRegister = JSON.parse(localStorage.getItem("isRegister"));
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const Username = localStorage.getItem("Username");
  const route = `/weather/:${Username}`;
  if (isRegister || isLogin) {
    return <Navigate to={route} />;
  } else {
    return children;
  }
};
export default PublicRoute;
