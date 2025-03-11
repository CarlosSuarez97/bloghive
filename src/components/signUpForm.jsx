import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components

const SignUpForm = () => {
    return(
        <div>
            <form action="post" id="submitSignUp">
            <div className="container">
                <div className="col s12 m6">
                    <div className="card darken-1">
                        <div className="card-content white-text formCard">
                            <div className="row">
                            <div className="input-field col s12">
                                <input type="text" id="firstName" required/>
                                <label htmlFor="firstName">Full name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="email" id="userEmail" required/>
                                <label htmlFor="firstName">Email address</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="password" id="firstName" required/>
                                <label htmlFor="firstName">Password</label>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <button class="btn waves-effect waves-light btn-large" type="submit" id="submitButton" name="signUpUser">Sign Up
                    <i class="material-icons right">send</i>
                </button>
            </div>
            </form>
        </div>
    )
}

export default SignUpForm;