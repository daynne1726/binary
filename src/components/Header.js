import React, { Component } from 'react'
import '../App.css'
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import { Button, } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {


  render() {

    // To display the Header And the class LoginForm 
    return (
      // className="container"
      <Router>
      <div className="header">
        <nav>
          {/* adding the image logo */}
          <img className="logo" alt="joke" src={require('../photos/logo.png')} />
          <Link to={'/'}><Button color='red' >Log In</Button></Link>
          <Link to={'/signup'} ><Button color='blue' >Sign Up</Button></Link>
        </nav>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>

// creating a class that will render either the class LoginForm or SignUp

    )
  }
}
export default Header
