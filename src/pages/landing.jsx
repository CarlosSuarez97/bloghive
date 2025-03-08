import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import '../../public/styles/landing.css'; //importing this page's custom styling
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {/* Application's logo goes here */}
                        <h1 className="rubik-semibold">Welcome to BlogHive</h1>
                        <h2 className="rubik-normal">Where you can share your thoughts</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="waves-effect waves-light btn-large redirectButtons" onClick={() => {navigate("/signup")}}>Sign Up</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="waves-effect waves-light btn-large redirectButtons">Log In</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Landing;