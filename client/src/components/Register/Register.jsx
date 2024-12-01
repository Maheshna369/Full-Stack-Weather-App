import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputRegister from "./InputRegister";
import Header from "../Header";
import axios from "axios";
const Register = () => {
  const [inputRegister, setInputRegister] = useState({
    Username: "",
    Password: "",
  });
  const [isRegister, checkRegister] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputRegister((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleClick = () => {
    if(inputRegister.Username.trim()==="" || inputRegister.Password.trim()===""){
      alert("Enter Your Username and Password to register.");
      return;
    }
    axios
    
      .post("http://localhost:5000/register", inputRegister)
      .then((response) => {
        console.log(
          `The response while post request while doin registration is: ${response}`
        );
        checkRegister(true);
        localStorage.setItem("isRegister", JSON.stringify(true));
        localStorage.setItem("Username", inputRegister.Username);
        const Username= localStorage.getItem("Username");
        navigate(`/weather/:${Username}`);
        setInputRegister({Username: "", Password: ""});
      })
      .catch((err) =>
        console.log(`Error while post request during registration in the frontend is: ${err}`)
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
