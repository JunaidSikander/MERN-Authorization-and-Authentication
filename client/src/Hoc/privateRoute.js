import React, {useContext} from "react";
import {Redirect, Route} from 'react-router-dom'
import {AuthContext} from "../Context/AuthContext";

const PrivateRoute = ({component: Component, roles, ...otherProps}) => {
    const {isAuthenticated, user} = useContext(AuthContext);
    return (
        <Route {...otherProps} render={props => {
            if (!isAuthenticated)
                return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>;
            if (!roles.includes(user.role))
                return <Redirect to={{pathname: '/', state: {from: props.location}}}/>;
            return <Component {...otherProps} />
        }}/>
    );
};

export default PrivateRoute;
