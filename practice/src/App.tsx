import React, { CSSProperties } from 'react';
import './App.css';
import {Prueba} from "./components/prueba/Prueba"
import {Content, MenuHorizontal} from "./components/common"
import mylogo from "./logo.svg"
import {SemanaView} from "./Views"
import {Texto} from "./components/common"

class App extends React.Component {
  render() {
    let bControl:boolean = true;
    let oResult:any=null;
    if(bControl){
      oResult= <label>texto de label</label>
    }

    let aArray=[1,2,3,4,5,6,7,8];

    let osaludo:string = `hola 
    
    ${3+2}`;
    let myStye:CSSProperties= {color:"green", textAlign:"center"}

    return <div className={"clase"} style={myStye}>
      {osaludo}
      <p>
        {oResult}
      </p>
      <img src={mylogo} style={{maxWidth:"100px"}}/>
      <div style={{backgroundImage:`url(${mylogo})`}}>
        <Prueba></Prueba>
        <Content></Content>
        <MenuHorizontal></MenuHorizontal>
        {
          aArray.map(x=>{
            return <p>{`EL número es ${x}`}</p>
          })
        }
        <Texto texto="Hola">Cuperpo</Texto>
        <Texto texto="Días laborables">
          <SemanaView></SemanaView>
        </Texto>
        
      </div>

    </div>;
  }
}

export default App;
