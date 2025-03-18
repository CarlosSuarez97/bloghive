import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import { useNavigate } from "react-router-dom";
import "../../public/styles/header.css"


const Header = () => {
    const navigate = useNavigate;
    return(
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a onClick={() => {navigate("/")}} className="rubik-semibold">BlogHive</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a onClick={() => {navigate("/signup")}}>Sign Up</a></li>
                        <li><a onClick={() => {navigate("/login")}}>Log In</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;