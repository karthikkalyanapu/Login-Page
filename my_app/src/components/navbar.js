import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import * as ReactBootStrap from 'react-bootstrap';
import { BrowserRouter as Router,Route,Link, NavLink , Switch, Redirect} from "react-router-dom";
import Tasks from "./Tasks";
import Users from "./Users";
import Form from "../form";
import Home from "./Home";


//const Navbar = () => {
  // let loggedInUser = undefined;
 // state = {loggedInUser: undefined}
  class Navbar extends React.Component{
   constructor(props){
     super(props);
     this.state = {
      loggedInUser: undefined
    };
   }
   render() {
      const setLoggedInUser = user => {
         if(user.email && user.password){
          this.setState({loggedInUser: user});
          // console.log('From Navbar State: ', this.state);
         }
      }

  // const setLoggedInUser = user => {
    // state = { loggedInUser: undefined }
  // setUser(user);
   // this.state.loggedInUser
   // console.log(loggedInUser);
 // }
    return (
    <Router>
    <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">React-Bootstrap</ReactBootStrap.Navbar.Brand>
        {this.state.loggedInUser && <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />}
        {this.state.loggedInUser &&  
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.NavLink>
              <NavLink exact activeClassName="active" to="/Home" className="home">Home</NavLink>
            </ReactBootStrap.NavLink>
            <ReactBootStrap.NavLink>
            <NavLink exact activeClassName="active" to="/Tasks" className="home">Tasks</NavLink>
            </ReactBootStrap.NavLink>
            <ReactBootStrap.NavLink>
            <NavLink exact activeClassName="active" to="/Users" className="home">Users</NavLink>
            </ReactBootStrap.NavLink>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
          <ReactBootStrap.NavLink>
            <NavLink exact activeClassName="active" to="/form" onClick={() => this.setState({loggedInUser: undefined})} className="home">Logout</NavLink>
            </ReactBootStrap.NavLink>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
        }
      </ReactBootStrap.Navbar>

     
    </div>
    {this.state.loggedInUser ? 
      <Switch>
        <Route exact path="/Home" component={Home} />
      
        <Route exact path="/Tasks" component={Tasks} />
        <Route exact path="/Users" component={Users} />
        <Route exact path="/form" component={() => <Form setUser = {setLoggedInUser} /> } />
      <Redirect to=
      {{
        pathname:"/Home",
       
      }}
      />
      
        

      </Switch>  :
      <Switch>
        <Route path="/" component={() => <Form setUser = {setLoggedInUser} /> } />
      </Switch>
    }
    </Router>
  )
}
}
export default Navbar;