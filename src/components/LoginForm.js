import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, Card} from 'semantic-ui-react'
import req from "./helper";
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // for Log in,,, partial hard code
      login: false
    }
  }
  onSubmit = () => {
    const newUser = {
      email: this.state.email,
      password: this.state.password,
    };
    req
      .login(newUser)
      // console.log(newUser)
      .then(resp => {
        console.log(resp);  
        if (resp.status) {
          this.setState({ login: true });
        }
      })
      .catch(err => {
        alert("All field must be required!!!")

      });
  };

  LoginForm = () => (
    
    <Card.Group>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username/Email'
            value = {this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            value = {this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Link to={'/userfeed'}><Button content='Login' onClick={e => this.onSubmit(e)} primary /></Link>
          <Link to={'/signup'} ><Button color='blue' >Sign Up</Button></Link>
        </Form>
      </Grid.Column>
    </Card.Group>
  
  )
  LoginHandler = (e) => {
    const { username, password, pass, uname } = this.state;
    if (username === uname && pass === password) {
      this.setState({ login: true })
      console.log(this.state.login)
    }
    else {
      this.setState({ login: false })
    }
  }

  render() {
    const { login } = this.state;
    if (login === true) {
      return (
        <Router>
          <Switch>
            <Redirect to="/signup" />
          </Switch>
        </Router>
        
      )
    }
    else {
      return (
        <div className="container">
          <div className = "box">
          <this.LoginForm />
          </div>
        </div>
      )
    }
  }
}
export default LoginForm