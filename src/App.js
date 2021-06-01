import React from 'react'
import './App.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import NewQuestion from "./Components/NewQuestion";
import LeaderBoard from "./Components/LeaderBoard";
import Logout from "./Components/Logout";
import NavBar from "./Components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <div style={{marginTop: '56px'}}>
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/new"  component={NewQuestion}/>
             <Route path="/leader"  component={LeaderBoard}/>
             <Route path="/login"  component={Login}/>
              <Route path="/logout"  component={Logout}/>
          </Switch>
        </div>
    </div>
  );
}

export default App;
