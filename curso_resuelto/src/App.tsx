import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Prueba} from "./components/prueba"
import {MenuHorizontal} from "./components/common/MenuHorizontal"
import {Content} from "./components/common/Content"



class App extends Component {
  render() {
    return (
      <div className="App">
          <MenuHorizontal></MenuHorizontal>
          <Content></Content>
          <Prueba></Prueba>
          <img src={logo} style={{maxWidth:"100px"}}/>
          <div  style={{backgroundImage:`url(${logo})`, minHeight:"200px"}}>

          </div>
      </div>
    );
  }
}

export default App;
