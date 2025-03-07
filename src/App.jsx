import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components
import Landing from "./pages/landing";


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          {/* Routes go here */}
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
