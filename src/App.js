import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import UserFeed from './components/UserFeed';
import SignUp from './components/SignUp';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Side from './components/Side';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/userfeed' component={UserFeed} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/sidebar' component={Side} />
            <Redirect from ="/" to ="/login"> </Redirect>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;