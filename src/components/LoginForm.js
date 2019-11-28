import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, Card, Container } from 'semantic-ui-react'
import req from "./helper";
import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import 'whatwg-fetch';
import { setInStorage, getFromStorage, } from './storage';
import UserFeed from './UserFeed'
import AppBar from './frame/AppBar'
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      email: '',
      password: '',
      token: '',
      signInError: '',
      // for Log in,,, partial hard code
      login: false

    }
    this.onSignIn = this.onSignIn.bind(this);
  }
  componentDidMount() {
    this.setState({
      isLoading: false
    });
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


  onSignIn() {
    // Grab state
    const signin ={
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({
      isLoading: true,
    });
    req
      .login(signin)
    // Post request to backend
      .then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({ login: true })
          this.setState({
            signInError: json.message,
            isLoading: false,
            password: '',
            email: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/user/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  LoginForm = () => (

    <Card.Group>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username/Email'
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button content='Login' onClick={this.onSignIn} primary />
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
    const { login, isLoading, token,signInError } = this.state;
    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (
        <div className="container">
          <div className="box">
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <this.LoginForm />
          </div>
        </div>
      );
    }
    else if (login === true) {
      return (
        <div><AppBar/>
        <UserFeed/>
        </div>

      )
    }
  }
}
export default LoginForm