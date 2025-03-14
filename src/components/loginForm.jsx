import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import "../../public/styles/loginForm.css"

const LoginForm = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                        <div className="card-content black-text">
                            <span className="card-title"><h1>Log into your account</h1></span>
                            <div className="row">
                                <form action="" className="col s12" method="post">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="email" id="userEmail" name="userEmail" class="validate black-text"/>
                                            <label htmlFor="userEmail">Email address</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="password" name="userPassword" id="userPassword" class="validate black-text"/>
                                            <label htmlFor="userPassword">Password</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button type="submit" name="createUser" className="btn btn-large waves-effect waves-light">Log In</button>
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

export default LoginForm;