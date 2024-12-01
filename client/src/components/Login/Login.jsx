import React, { useState } from "react";
import Header from "../Header";
import InputLogin from "./InputLogin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputLogin, setInputLogin] = useState({ Username: "", Password: "" });
  const [isLogin, checkLogin] = useState(false);
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
      .post("http://localhost:5000/login", inputLogin)
      .then((response) => {
        console.log(
          `The response while post request while doin login is: ${response}`
        );
        checkLogin(true);
        localStorage.setItem("isLogin", JSON.stringify(true));
        localStorage.setItem("Username", inputLogin.Username);
        const Username = localStorage.getItem("Username");
        navigate(`/weather/:${Username}`);
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
