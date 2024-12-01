import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import "./Login.css";
const InputLogin = (props) => {
  const inputLogin = props.inputLogin;
  const handleChange = props.handleChange;
  const handleClick = props.handleClick;
  return (
    <>
    <div className="login-container">
      <h3>Login</h3>
      <div className="auth-container">
        <div className="Username">
          <p>Username</p>
          <input
           placeholder="Enter Your Username..."
            onChange={handleChange}
            name="Username"
            value={inputLogin.Username}
            type="text"
          />
        </div>
        <div className="Password">
          <p>Password</p>
          <input
           placeholder="Enter Your Username..."
            onChange={handleChange}
            name="Password"
            value={inputLogin.Password}
            type="text"
          />
        </div>
      </div>
      <button onClick={handleClick}>
        Login
        <LoginIcon />
      </button>
    </div>
    <footer>
        <p>MERN Stack Weather App</p>
        <p>&copy; 2024 Maphy, Inc</p>
      </footer>
  </>
  );
};
export default InputLogin;
