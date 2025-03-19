import React from "react";
import LoginForm from "../components/loginForm";
import logo from "../assets/logo.png";
import Footer from "../components/footer";
import "../../public/styles/login.css";

const Login = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <img src={logo} alt="" id="logo" />
                </div>
                <div className="row">
                    <LoginForm/>
                </div>
                <div className="row">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Login;