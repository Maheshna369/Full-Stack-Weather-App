import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Weather from "./Weather/Weather";

const ProtectedRoute = () => {
  const isAuth= JSON.parse(sessionStorage.getItem("isAuth"));
  return isAuth ? <Weather /> : <Navigate to="/" />;
};
export default ProtectedRoute;
