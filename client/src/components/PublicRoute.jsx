import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuth = JSON.parse(sessionStorage.getItem("isAuth"));
  if (isAuth) {
    return <Navigate to="/weather" />;
  } else {
    return children;
  }
};
export default PublicRoute;
