import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Grid } from 'semantic-ui-react'
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import UserFeed from './UserFeed';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // for Log in,,, partial hard code
      uname: 'binary@gmail.com',
      pass: 'binary',
      login: false
    }
  }
  LoginForm = () => (
    <Grid.Column>
      <Form>
        <Form.Input
          icon='user'
          iconPosition='left'
          label='Username/Email'
          placeholder='Username/Email'
          onChange={e => this.setState({ username: e.target.value })}
        />
        <Form.Input
          icon='lock'
          iconPosition='left'
          label='Password'
          type='password'
          onChange={e => this.setState({ password: e.target.value })}
        />
        <Link to={'/userfeed'}><Button content='Login' onClick={e => this.LoginHandler(e)} primary /></Link>
        <Link to={'/signup'} ><Button color='blue' >Sign Up</Button></Link>
      </Form>
    </Grid.Column>
  )
  LoginHandler = (e) => {
    const { username, password, pass, uname } = this.state;
    if (username === uname && pass === password) {
      swal("Succes!", "You are are now Logged in!", "success");
      this.setState({ login: true })
      console.log(this.state.login)
    }
    else {
      swal("Oops!", "Password or username is Incorrect!", "error");
      this.setState({ login: false })
      
      
    }
  }

  render() {
    const { login } = this.state;
    if (!login) {
      return (
        <div className="box">
          <this.LoginForm />
        </div>
      )
    }
    else{
      return(
        <UserFeed/>
      )
      }
  }
}
export default LoginForm