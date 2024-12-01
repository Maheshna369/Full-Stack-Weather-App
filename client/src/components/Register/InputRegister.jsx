import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VisibilityIcon from "@mui/icons-material/Visibility";
const InputRegister = (props) => {
  const inputRegister = props.inputRegister;
  const handleChange = props.handleChange;
  const handleClick = props.handleClick;
  // const [showPassword, setShowPassword]= useState(false);
  // const handlePasswordDynamics=()=>{
  //   setShowPassword(!showPassword);
  // }
  return (
    <>
      <div className="body">
        <div className="register-container">
          <h3>Register</h3>
          <div className="auth-container">
            <div className="Username">
              <p>Username</p>
              <input
                placeholder="Enter Username..."
                onChange={handleChange}
                name="Username"
                value={inputRegister.Username}
                type="text"
              />
            </div>
            <div className="Password">
              <p>Password</p>
              <input
                placeholder="Enter Password..."
                onChange={handleChange}
                name="Password"
                value={inputRegister.Password}
                type="text"
              />
            </div>
          </div>
          <button onClick={handleClick}>
            Register
            <HowToRegIcon />
          </button>
        </div>
      </div>
      <footer>
        <p>MERN Stack Weather App</p>
        <p>&copy; 2024 Maphy, Inc</p>
      </footer>
    </>
  );
};
export default InputRegister;
