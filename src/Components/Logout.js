import React from "react";
import {Logout} from "../Redux/Actions";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class LogoutApp extends React.Component{
    componentDidMount() {
        this.props.dispatch(Logout())
    }
    render(){
        return(
            <Redirect to="/login"/>
        )
    }
}
export default connect()(LogoutApp)