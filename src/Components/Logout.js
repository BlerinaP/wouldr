import React from "react";
import {handleLogout} from "../Redux/Actions";
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

class Logout extends React.Component{
    componentDidMount() {
        this.props.dispatch(handleLogout())
    }
    render(){
        return(
            <Redirect to="/login"/>
        )
    }
}
export default connect()(Logout)