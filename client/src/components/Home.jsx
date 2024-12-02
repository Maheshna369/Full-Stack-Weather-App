import React, { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register/Register";
import Login from "./Login/Login";
import AboutMe from "./AboutMe";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

const Home = () => {
  const Username = sessionStorage.getItem("Username");
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        
        <PublicRoute>
          <Register />
        </PublicRoute>
        
      ),
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/aboutme",
      element: <AboutMe />,
    },
    {
      path: `/weather`,
      element: <ProtectedRoute />,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Home;
