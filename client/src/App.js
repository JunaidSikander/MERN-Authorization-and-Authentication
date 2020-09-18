import React from 'react';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
    return (
        <Router>
          <Navbar/>
        </Router>
    );
}

export default App;
