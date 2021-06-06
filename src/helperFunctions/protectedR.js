import React from "react";
import {Route, Redirect} from 'react-router-dom';
const ProtectedR = ({component: Component, authed, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            authed ?
                <Component {...props}/>
                : <Redirect to={{pathname: '/login', state: {from: props.location.pathname}}}/>
        )}

    />
);
export default ProtectedR