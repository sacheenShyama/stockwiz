import React from "react";
import Background from "../components/LandingComponents/Background";
import LoginForm from "../components/login/LoginForm";
import Navbar from "../components/LandingComponents/Navbar";
import StockWilogo from "../assets/StockWilogo.png";

const Login = () => {
  return (
    <Background>
      <div>
        <span>
          <img src={StockWilogo} alt="" />
        </span>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <LoginForm />
      </div>
    </Background>
  );
};

export default Login;
