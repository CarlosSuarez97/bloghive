import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components

const SignUpForm = () => {
    return(
        <div>
            <div className="container">
                <div className="col s12">
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
    )
}

export default SignUpForm;