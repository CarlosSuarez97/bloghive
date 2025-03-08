import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import Landing from "./pages/landing";
import SignUp from "./pages/signup";


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          {/* Routes go here */}
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
