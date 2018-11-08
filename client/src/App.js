import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const proxy = require('http-proxy-middleware');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi There
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      <p>
        <a href='/callbackgoogle'>sign in</a>
      </p>
        </header>

      </div>
    );
  }
}

export default App;
