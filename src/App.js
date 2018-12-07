import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Hello name="Zineddine"/>
          </p>
          <a
            className="App-link"
            href="https://github.com/Zed-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub Account
          </a>
        </header>
      </div>
    );
  }
}

export default App;
