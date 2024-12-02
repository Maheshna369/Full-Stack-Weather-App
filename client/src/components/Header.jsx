import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const isAuth= JSON.parse(sessionStorage.getItem("isAuth"));
  const navigate = useNavigate();
  const emptyString = "";
  const handleLogout = () => {
    sessionStorage.setItem("isAuth", JSON.stringify(false));
    console.log(`The isAuth after logout is: ${isAuth}`);
    navigate("/login");
  };
  const conditionalHeader = () => {
    if (isAuth) {
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
          <Link to="/aboutme">About Me</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
