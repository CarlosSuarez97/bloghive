import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import Footer from "../components/footer";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h2 className="rubik-semibold">Sign up for an account</h2>
                    </div>
                </div>
            </div>
            <SignUpForm/>
            <Footer/>
        </div>
    )
}

export default SignUp;