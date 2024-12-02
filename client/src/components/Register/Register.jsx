import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputRegister from "./InputRegister";
import Header from "../Header";
import axios from "axios";

const Register = () => {
  const [inputRegister, setInputRegister] = useState({
    Username: "",
    Password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputRegister((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = () => {
    if (
      inputRegister.Username.trim() === "" ||
      inputRegister.Password.trim() === ""
    ) {
      alert("Enter Your Username and Password to register.");
      return;
    }
    axios

      .post("https://mernstack-weather-app.onrender.com/register", inputRegister)
      .then((response) => {
        console.log(
          `The response while post request while doin registration is: ${response}`
        );
        sessionStorage.setItem("isAuth", JSON.stringify(true));
        console.log(`The isAuth is: `, sessionStorage.getItem("isAuth"));
        navigate(`/weather`);
        setInputRegister({ Username: "", Password: "" });
      })
      .catch((err) =>
        console.log(
          `Error while post request during registration in the frontend is: ${err}`
        )
      );
  };
  return (
    <>
      <Header />
      <InputRegister
        inputRegister={inputRegister}
        handleChange={handleChange}
        handleClick={handleClick}
      />
    </>
  );
};
export default Register;
