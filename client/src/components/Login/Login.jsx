import React, { useState, useContext } from "react";
import Header from "../Header";
import InputLogin from "./InputLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [inputLogin, setInputLogin] = useState({ Username: "", Password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputLogin((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = () => {
    if (
      inputLogin.Username.trim() === "" ||
      inputLogin.Password.trim() === ""
    ) {
      alert("Enter Your Username and Password to Login.");
      return;
    }
    axios
      .post("https://mernstack-weather-app.onrender.com/login", inputLogin)
      .then((response) => {
        console.log(
          `The response while post request while doin login is: ${response}`
        );
        sessionStorage.setItem("isAuth", JSON.stringify(true));
        console.log(`The isAuth is: `, sessionStorage.getItem("isAuth"));
        navigate(`/weather`);
        setInputLogin({ Username: "", Password: "" });
      })
      .catch((err) =>
        console.log(`The error while post request during login is: ${err}`)
      );
  };
  return (
    <>
      <Header />
      <InputLogin
        inputLogin={inputLogin}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </>
  );
};
export default Login;
