import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Cosa} from "./components/Cosa"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Cosa></Cosa>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit sibran <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
