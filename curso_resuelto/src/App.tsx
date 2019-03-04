import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Prueba} from "./components/prueba"
import {MenuHorizontal} from "./components/common/MenuHorizontal"
import {Filter} from "./components/common/Filter"

import {Texto} from "./components/common/Texto"
import {Content} from "./components/common/Content"
import {Button} from "react-bootstrap"
import {Semana} from "./components/views/Semana"
import { IMenuItem } from './components/common/MenuHorizontal/MenuHorizontal';




class App extends Component {
  render() {

    let items:IMenuItem[]=[
      {id:1, text:"Home", link:"#home"},
      {id:2, text:"Saludos", link:"#home"},
      {id:3, text:"Miguel", link:"#home"},
      {id:4, text:"jeje", link:"#home"},
      {id:5, text:"agur", link:"#home"}
    ];

    return (
      <div className="App">
          <MenuHorizontal items={items}></MenuHorizontal>
          <Content>
            <Filter placeHolder="Escribe tu texto..." btnText="Filtra" value="maybe"></Filter>
            <Prueba></Prueba>
            <img src={logo} style={{maxWidth:"100px"}}/>
            <div  style={{backgroundImage:`url(${logo})`, minHeight:"200px"}}>

            </div>
            <Button>holaaa</Button>
            <Semana></Semana>
            <Texto title="blablabla">¿Hablamos?</Texto>
          </Content>
          {
            //36
          }
      </div>
    );
  }
}

export default App;
