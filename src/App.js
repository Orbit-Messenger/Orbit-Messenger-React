import React from 'react';
import { Redirect, Route, Switch} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import Chat from "./Chat";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Singup";

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home"/>}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
    </div>
  );
}

export default App;
