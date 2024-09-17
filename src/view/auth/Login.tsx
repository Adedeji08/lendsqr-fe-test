import React, { useState } from "react";
import "../../styles/Login.scss";
import LoginImg from "../../assets/pablo-sign-in-1.svg";
import Icon from "../../assets//Group.svg";
import { Link } from "react-router-dom";

const LoginView = () => {
  const [viewPassword, setViewPassword] = useState("");
  const handleShowPassword = () => {
    setViewPassword((previousValue): any => !previousValue);
  };

  return (
    <div>
      <div className="container">
        {/* Left */}
        <div className="left__container">
          <img src={Icon} alt="logo" />
          <img className="login__img" src={LoginImg} alt="signup image" />
        </div>
        {/* Right */}
        <div className="right__container">
          <form className="login__form">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <div className="input__email">
              <input type="email" id="email" placeholder="Email" required />
            </div>
            <br /> <br />
            <div className="input__email">
              <input
                type={viewPassword ? "text" : "password"}
                id="email"
                placeholder="Password"
                required
              />
              <span onClick={handleShowPassword}>
                {!viewPassword ? <span>SHOW</span> : <span>HIDE</span>}
              </span>
            </div>
            <br />
            <br />
            <Link to="/">
              <button className="btn" type="submit">
                LOG IN
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
