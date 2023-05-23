import React, { useState } from "react";
import "../../styles/Login.scss";
import LoginImg from "../../assets/pablo-sign-in-1.svg";
import Icon from "../../assets//Group.svg";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [viewPassword, setViewPassword] = useState('')

    const handlePwdSubmit = () => {
      setViewPassword((previousValue): any => !previousValue);
    }
    
    const dispatch = useDispatch()
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

       dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true
        })
       )
    }
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
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}> 
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
                <div className="input__email">
                    <input
                    id="input__id"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div><br/> <br/>
                <div className="input__email">
                    <input
                    id="input__id"
                    type={viewPassword ? 'text' : 'password'}
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                    onClick={handlePwdSubmit}
                    >
                      {!viewPassword ? (
                        <span>SHOW</span>
                      ):(
                        <span>HIDE</span>
                      )

                      }
                      </span>
                </div><br/><br/>
                <button className="btn" type="submit" >LOG IN</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
