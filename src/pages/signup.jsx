import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import Footer from "../components/footer";
import SignUpForm from "../components/SignUpForm";
import logo from "../assets/logo.png";
import "../../public/styles/signup.css";

const SignUp = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <img src={logo} alt="bloghive" id="logo"/>
                </div>
            </div>
            <div className="row">
                <SignUpForm/>
            </div>
            <div className="row">
                <Footer/>
            </div>
        </div>
    )
}

export default SignUp;