import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Prueba} from "./components/prueba"
import {MenuHorizontal} from "./components/common/MenuHorizontal"

import {Texto} from "./components/common/Texto"
import {Content} from "./components/common/Content"
import {Button} from "react-bootstrap"
import {SemanaView, HomeView, UsuariosView, AboutView, UsuarioView, ContadorView, InsertUsuarioView} from "./components/views/index.d"
import { IMenuItem } from './components/common/MenuHorizontal/MenuHorizontal';
import { Router, Route, Switch,  } from 'react-router';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { TimerView } from './components/views/Contador';




class App extends Component {
  render() {

    let items:IMenuItem[]=[
      {id:1, text:"Home", link:"home"},
      {id:2, text:"Semana", link:"semana"},
      {id:3, text:"Usuarios", link:"usuarios"},
      {id:4, text:"About", link:"about"},
      {id:5, text:"Contador", link:"contador"},
      {id:6, text:"Timer", link:"timer"},
      {id:7, text:"Insertar Usuario", link:"insertUser"},
    ];

    return (
      <div className="App">
            {
            /*
            
            ***Primeras prácticas***
          
            <MenuHorizontal items={items}></MenuHorizontal>
            
            <Prueba></Prueba>
            <img src={logo} style={{maxWidth:"100px"}}/>
            <div  style={{backgroundImage:`url(${logo})`, minHeight:"200px"}}>

            </div>
            <Button>holaaa</Button>
            <Semana></Semana>
            <Texto title="blablabla">¿Hablamos?</Texto>
            */
            }

            <BrowserRouter>
                  <Content>
                    <MenuHorizontal items={items}></MenuHorizontal>
                        <Route exact path="/" component={HomeView} />
                        <Route path="/home" component={HomeView} />
                        <Route path="/about" component={AboutView} />
                        <Route path="/usuarios" component={UsuariosView} />
                        <Route path="/usuario/:id" component={UsuarioView} />
                        <Route path="/semana" component={SemanaView} />
                        <Route path="/contador" component={ContadorView} />
                        <Route path="/timer" component={TimerView} />
                        <Route exact path="/insertUser" component={InsertUsuarioView} />
                        <Route path="/insertUser/:id" component={InsertUsuarioView} />
                  </Content>
            </BrowserRouter>
          {
            //36
          }
      </div>
    );
  }
}

export default App;
