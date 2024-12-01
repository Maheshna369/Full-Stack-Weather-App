import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const isRegister = JSON.parse(localStorage.getItem("isRegister"));
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  const navigate = useNavigate();
  const emptyString = "";
  const handleLogout = () => {
    localStorage.setItem("isRegister", JSON.stringify(false));
    localStorage.setItem("isLogin", JSON.stringify(false));
    localStorage.setItem("Username", emptyString);
    navigate("/login");
  };
  const conditionalHeader = () => {
    if (isRegister || isLogin) {
      return (
        <li onClick={handleLogout}>
          <Link>Logout</Link>
        </li>
      );
    } else {
      return (
        <>
          <li>
            <Link to="/">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      );
    }
  };
  return (
    <header>
      <div className="title">Maphy's Weather Info</div>
      <ul>
        {conditionalHeader()}
        <li>
          <Link to="/aboutme">AboutMe</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
