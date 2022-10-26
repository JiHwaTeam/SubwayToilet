import React, {useState} from "react";
import TitleLogoImg from "../Components/TitleLogoImg";
import LoginRegister from "../Components/LoginRegister";
import '../Components/Login.scss';

const Login = () => {

  

  return(
    <div className="login-wrap" style={{marginTop: '100px'}}>
      <TitleLogoImg/>
      <LoginRegister/>
    </div>
  );
};

export default Login;
