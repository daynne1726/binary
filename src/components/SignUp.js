import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid } from 'semantic-ui-react'
import LoginForm from './LoginForm';
import Header from './Header'
import axios from "axios";
import swal from 'sweetalert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: '',
      gender: '',
      email: '',
      password: '',
      username: '',
      verifypass: '',
      sign: false,
      signUpError: '',
      signInError: '',

    }
  }

  onSubmit = event => {
    event.preventDefault();
    const newUser = {
      fname: this.state.fname,
      lname: this.state.lname,
      gender: this.state.gender,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };
    axios.post("http://localhost:4000/user/signup", newUser).then(response => {
      console.log("New user added", response.data );
      this.setState({ fname: "",username: "", lname: '', gender: '',email: '',password: ''});
    });
  };

  SignUpForm = () => (
    <Grid.Column>
      <Form onSubmit = {this.onSubmit}>
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

          onChange={this.onTextboxChangeSignUpEmail}
          required

        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          
          onChange={this.onTextboxChangeSignUpPassword}
          required
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Verify Password'
          type='password'
         
          onChange={e => this.setState({ verifypass: e.target.value })}
          required
        />
        <Link to={"/login"}><Button content='Sign Up' onClick={this.onSubmit} primary /></Link>
      </Form>
    </Grid.Column>
  )

  // SignUpHandler = (e) => {
  //   const { password, verifypass } = this.state;
  //   if (password === verifypass) {
  //     swal("Welcome!", "You are already signed in!", "success");
  //     this.setState({ sign: true })

  //     console.log(this.state.sign)
  //   }
  //   else {
  //     swal("Oops!", "Password did not match!", "error");
  //   }
  // }

  render() {
    const {
      token,
      sign,
      signUpError,
    } = this.state;
    if (!sign) {
      if (!token) {
        return (
          <div className="container">
            <Header />
            <div className="boxsign">
              {
                (signUpError) ? (
                  <p>{signUpError}</p>
                ) : (null)
              }
              <this.SignUpForm />
            </div>
          </div>
        );
      }
    }
    // const { sign } = this.state
    // if (!sign) {
    //   return (
    //     <div className="container"> 

    //       <div className="boxsign">
    //         <this.SignUpForm />
    //       </div>
    //     </div>
    //   )
    // }
    else {
      return (
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
          </Switch>
        </Router>
      )
    }
  }
}
export default SignUp;