import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import "../../public/styles/signUpForm.css"

const SignUpForm = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                        <div className="card-content white-text formCard">
                            <span className="card-title rubik-medium"><h1>Create an account</h1></span>
                            <div className="row">
                                <form action="" className="col s12" method="post">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="text" id="fullName" name="userFullName" class="validate white-text" />
                                            <label htmlFor="fullName" className="white-text">Full name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="email" id="userEmail" name="userEmail" class="validate white-text"/>
                                            <label htmlFor="userEmail" className="white-text">Email address</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="password" name="userPassword" id="userPassword" class="validate white-text" />
                                            <label htmlFor="userPassword" className="white-text">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="password" name="userConfirmPass" id="passwordConfirm" class="validate white-text" />
                                            <label htmlFor="passwordConfirm" className="white-text">Confirm password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button type="submit" name="createUser" className="white-text btn btn-large waves-effect waves-light" id="submitButton">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm;