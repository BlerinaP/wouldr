import React from 'react'
import {fetchAllUsers, handleAuth} from "../Redux/Actions/index";
import {connect }from "react-redux";
import {Redirect} from 'react-router-dom';

class Login extends React.Component{
    state={
        selected: 'selected'
    };
    componentDidMount() {
        this.props.dispatch(fetchAllUsers())
    }

    handleSelected = (e) => {
        const userSelected = e.target.value;
        this.setState(() => ({
            selected: userSelected
        }));
    };
    handleSubmit = (e) => {
        e.preventDefault();
       this.props.dispatch(handleAuth(this.state.selected))
    };
    render(){
        if(this.props.users === undefined){
            return(
                <div>Loading...</div>
            )
        }

        const {from} = this.props.location.state || {from: {pathname: '/'}};
        if(this.props.authed === true){
            return <Redirect to={from}/>
        }
        return(
            <div className="login-card">
                <div>
                    <h1>Welcome To Would You Rather App</h1>
                    <p>Please sign in to continue</p>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <select className="form-select" aria-label="Default select example" defaultValue="0" onChange={(e) => this.handleSelected(e)}>
                                <option  value="selected">Select User</option>
                                {Object.keys(this.props.users).map((user) => {
                                    return <option key={this.props.users[user].id} value={this.props.users[user].id}>{this.props.users[user].name}</option>
                                })}
                            </select>
                            <button className="btn" type="submit" disabled={this.state.selected === 'selected'}>Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    users: state.users,
    authed: state.authenticated.authedUser
});
export default connect(mapStateToProps)(Login);