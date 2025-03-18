import React, {useState} from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import "../../public/styles/signUpForm.css";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    return(
        <div className="container">
            <form action="" className="col s12">
                <div className="row">
                    <div className="input-field col s12 m6 l6">
                        <input type="text" name="firstName" id="firstName" className="validate"/>
                        <label htmlFor="firstName">First name</label>
                    </div>
                    <div className="input-field col s12 m6 l6">
                        <input type="text" name="lastName" id="lastName" className="validate"/>
                        <label htmlFor="lastName">Last name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="email" name="email" id="email" className="validate"/>
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type={showPassword ? "text": "password"} name="password" id="password"/>
                        <label htmlFor="password">Password</label>
                        <span
                        className="material-icons prefix"
                        style={{cursor: "pointer", position: "absolute", right: 10, top: 10}}
                        onClick={() => {setShowPassword(!showPassword)}}
                        >
                            {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </div>
                    <div className="input-field col s12">
                        <input type={showPassword ? "text": "password"} name="confirmPassword" id="confirmPassword"/>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <span
                        className="material-icons prefix"
                        style={{cursor: "pointer", position: "absolute", right: 10, top: 10}}
                        onClick={() => {setShowPassword(!showPassword)}}
                        >
                            {showPassword ? "visibility_off" : "visibility"}
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button type="submit" className="btn-large waves-effect waves-light customButtons">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;