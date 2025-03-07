import React from "react";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import '../../public/styles/landing.css'; //importing this page's custom styling
import Footer from "../components/footer";

const Landing = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        {/* Application's logo goes here */}
                        <h1>Welcome to BlogHive</h1>
                        <h2>Where you can share your thoughts</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="waves-effect waves-light btn-large redirectButtons">Sign Up</button>
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