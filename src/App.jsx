import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css'; //importing Materialize CSS
import 'materialize-css/dist/js/materialize.min.js'; //importing Materialize's JS components


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          {/* Insert paths and their respective elements here */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
