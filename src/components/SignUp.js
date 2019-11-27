import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid, } from 'semantic-ui-react'

import { BrowserRouter as Router, Switch, Redirect, Link } from 'react-router-dom';
import req from "./helper";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: '',
      gender: '',
      email: '',
      username: '',
      password: '',
      verifypass: '',
      sign: false,
    }
  }

  onSubmit = () => {
    const newUser = {
      firstName: this.state.fname,
      lastName: this.state.lname,
      gender: this.state.gender,
      userName: this.state.username,
      email: this.state.email,
      password: this.state.password,
      signUpDate: new Date()
    };
    req
      .addUser(newUser)
      // console.log(newUser)
      .then(resp => {
        console.log(resp);  
        if (resp.status) {
          this.setState({ sign: true });
        }
      })
      .catch(err => {
        alert("All field must be required!!!")

      });
  };

  signupHandler = (e) => {
    e.preventDefault();
    const { password, verifypass } = this.state
    if (password === verifypass) {
      this.setState({ sign: true })
    } else {
      this.setState({ sign: false })
    }

  }
  SignUpForm = () => (

    <Grid.Column>
      <Form>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='First Name'
          placeholder='First Name'
          value={this.state.fname}
          onChange={e => this.setState({ fname: e.target.value })}
          required
        />
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Last Name'
          placeholder='Last Name'
          required
          value={this.state.lname}
          onChange={e => this.setState({ lname: e.target.value })}
        />
        <label><b>Gender</b>
          <select onChange={e => this.setState({ gender: e.target.value })}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Username'
          placeholder='Username'
          value={this.state.username}
          onChange={e => this.setState({ username: e.target.value })}
          required
        />
        <Form.Input
          icon='mail'
          iconPosition='left'
          label='Email'
          type='email'
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          required

        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
          required
        />
        {/* <Form.Input
          icon='lock'
          iconPosition='left'
          label='Verify Password'
          type='password'
          value={this.state.verifypass}
          onChange={e => this.setState({ verifypass: e.target.value })}
          required
        /> */}
        <Link to={"/login"}><Button content='Sign Up' onClick={this.onSubmit} primary /></Link>
      </Form>
    </Grid.Column>

  )

  render() {
    const {
      sign,
    } = this.state;
    if (sign === true) {
      return (
        <Router>
          <Switch>
            <Redirect to="/login" />
          </Switch>
        </Router>
      )
    } else {
      return (
        <div className="container">
          <div className="boxsign">
            <this.SignUpForm />
            {/* {this.state.email}
            {this.state.gender} */}
          </div>
        </div>
      );
    }
  }



}
export default SignUp;