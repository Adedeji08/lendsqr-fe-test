import React, { useState, useEffect } from "react";
import { ChangeEventHandler } from "react";
import "../../styles/Login.scss";
import LoginImg from "../../assets/pablo-sign-in-1.svg";
import Icon from "../../assets//Group.svg";
import { Link } from "react-router-dom";


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const { email, password } = formData;
  const [errorMessage, setErrorMessage] = useState("");
    
    const [viewPassword, setViewPassword] = useState('')

  // const handleInputChange = (event: any) => {
  //   const { name, value } = event.target;
  //   setformData({ ...formData, [name]: value });
  // };
  const handleShowPassword = () => {
    setViewPassword((previousValue): any => !previousValue);
};


    // const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault();
    //   if (!email || !password) {
    //     setErrorMessage("All fields are required!");
    //     return;
    //   }
  
    //   // if (!validateEmail(email)) {
    //   //   setErrorMessage("Please enter a valid email address!");
    //   //   return;
    //   // }
    //   const response = { email, password };
    //   console.log(response,'response')
    //   setIsLoading(true);
    //   try {
    //     const data = await LoginUser(response);
    //     console.log('mydata',data)
    //     await dispatch(SET_LOGIN(true));
    //     await dispatch(SET_NAME(data?.data));
    //     setIsLoading(false);
    //     // navigate("/credit");
    //   } catch (error:(any)) {
    //     const message =  error.response.data.message || error.message || error.toString();
    //     setErrorMessage(message);
    //   setIsLoading(false);
    //   setformData(initialState);
    //   }
    // }
   

    

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
            <form className="login__form"  > 
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
                <div className="input__email">
                    <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    />
                </div><br/> <br/>
                <div className="input__email">
                    <input
                    type={viewPassword ? 'text' : 'password'}
                    id="email"
                    placeholder="Password"
                    required
                    />
                    <span
                    onClick={handleShowPassword}
                    >
                      {!viewPassword ? (
                        <span>SHOW</span>
                      ):(
                        <span>HIDE</span>
                      )

                      }
                      </span>
                </div><br/><br/>
                <Link to='/'>
                <button className="btn" type="submit" >LOG IN</button>
                </Link>
            </form>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
