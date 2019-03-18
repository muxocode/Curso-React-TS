import React, { CSSProperties } from 'react';
import './App.css';
import {Prueba} from "./components/prueba/Prueba"
import {Content, MenuHorizontal} from "./components/common"

class App extends React.Component {
  render() {
    let bControl:boolean = true;
    let oResult:any=null;
    if(bControl){
      oResult= <label>texto de label</label>
    }

    let osaludo:string = `hola 
    
    ${3+2}`;
    let myStye:CSSProperties= {color:"green", textAlign:"center"}

    return <div className={"clase"} style={myStye}>
      {osaludo}
      <p>
        {oResult}
      </p>
      <Prueba></Prueba>
      <Content></Content>
      <MenuHorizontal></MenuHorizontal>
    </div>;
  }
}

export default App;
