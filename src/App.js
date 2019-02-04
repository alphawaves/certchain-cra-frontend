import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import DocumentVerifier from './components/documentVerifier'
import Dashboard from './components/dashboard'
import DetailedDocument from './components/detailedDocument'
import DocumentUploader from './components/documentUploader'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/document/:id" component={DetailedDocument} />
            <Route path="/login" component={ LoginForm } />
            <Route path="/register" component={ RegisterForm } />
            <Route path="/verify" component={ DocumentVerifier } />
            <Route path="/upload" component={ DocumentUploader } />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
