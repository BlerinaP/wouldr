import React from 'react'
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import NewQuestion from "./Components/NewQuestion";
import LeaderBoard from "./Components/LeaderBoard";
import Poll from "./Components/Poll";
import Logout from "./Components/Logout";
import NavBar from "./Components/Nav";
import ResPoll from "./Components/Res";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {getAllQuestions} from "./Redux/Actions";
import ProtectedR from "./helperFunctions/protectedR";

class App extends React.Component{
    componentDidMount() {
        this.props.dispatch(getAllQuestions());
    }
    render(){
        return (
            <div className="App">
                {this.props.authed === true ? <NavBar logged={this.props.loggedInUser} /> : null}
                <div className={this.props.authed === true  ? 'addMt' : ''}>
                    <Switch>
                        <ProtectedR  path="/" exact component={Home} authed={this.props.authed}/>
                        <ProtectedR  path="/new"   exact component={NewQuestion} authed={this.props.authed}/>
                        <ProtectedR  path="/leader"   exact  component={LeaderBoard} authed={this.props.authed} />
                        <ProtectedR  path="/question/:id"  exact component={connect(mapStateToProps)(Poll)} authed={this.props.authed}/>
                        <ProtectedR path="/question/:id/results" exact component={connect(mapStateToProps)(ResPoll)} authed={this.props.authed}/>
                        <Route path="/login" exact component={withRouter(Login)}/>
                        <Route path="/logout" exact component={Logout}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    authed: state.authenticated.authedUser,
    loggedInUser: state.authenticated.loggedInUser
});
export default connect(mapStateToProps)(App);
