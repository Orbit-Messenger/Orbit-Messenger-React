import React from 'react';
<<<<<<< HEAD
import Navbar from './UtilComponents/Navbar.js'
import Footer from './UtilComponents/Footer.js'


function App() {
  return (
      <>
        <Navbar/>
        <Footer/>
      </>
=======
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
>>>>>>> d04d96caa0ad816684d99dba9f7bc79d2d6eaff6
  );
}

export default App;
