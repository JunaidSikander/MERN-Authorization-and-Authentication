import React from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Todos from "./Components/Todos";
import PrivateRoute from "./Hoc/privateRoute";
import Admin from "./Components/Admin";
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos}/>
            <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
        </Router>
    );
}

export default App;
