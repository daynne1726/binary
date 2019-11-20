import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid } from 'semantic-ui-react'
import LoginForm from './LoginForm';
import swal from 'sweetalert';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: '',
      gender: '',
      email: '',
      password: '',
      verifypass: '',
      username:'',
      sign: false,
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
          onChange={e => this.setState({ fname: e.target.value })}
          required
        />
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Last Name'
          placeholder='Last Name'
          required
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
          onChange={e => this.setState({ username: e.target.value })}
          required
        />
        <Form.Input
          icon='mail'
          iconPosition='left'
          label='Email'
          type='email'
          required
          onChange={e => this.setState({ email: e.target.value })}
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          required
          onChange={e => this.setState({ password: e.target.value })}
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Verify Password'
          type='password'
          required
          onChange={e => this.setState({ verifypass: e.target.value })}
        />
        <Link to = {"/login"}><Button content='Sign Up' onClick={e => this.SignUpHandler(e)} primary /></Link>
      </Form>
    </Grid.Column>
  )

  SignUpHandler = (e) => {
    const { password, verifypass } = this.state;
    if (password === verifypass) {
      swal("Welcome!", "You are already signed in!", "success");
      this.setState({ sign: true })
      
      console.log(this.state.sign)
    }
    else{
      swal("Oops!", "Password did not match!", "error");
    }
  }

  render() {
    const { sign } = this.state
    if (!sign) {
      return (
        <div className="boxsign">
          <this.SignUpForm />
        </div>
      )
    }
    else {
      return(
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