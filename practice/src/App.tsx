import React, { CSSProperties } from 'react';
import './App.css';
import {Prueba} from "./components/prueba/Prueba"
import {Content, MenuHorizontal} from "./components/common"
import mylogo from "./logo.svg"
import {SemanaView} from "./Views"
import {Texto} from "./components/common"
import { IItemMenu } from './components/common/MenuHotizontal/IItemMenu';
import {Filter} from "./components/common/filter"

class App extends React.Component {
  render() {

    let aItemsMenu:IItemMenu[]=[];

    aItemsMenu.push({nombe:"Home", url:"#home"});
    aItemsMenu.push({nombe:"About", url:"#home"});
    aItemsMenu.push({nombe:"Usuarios", url:"#home"});
    aItemsMenu.push({nombe:"Semana", url:"#home"});

    if(aItemsMenu){
      //...
    }

    return <div className={"clase"} style={{height:"5000px"}}>
      <MenuHorizontal items={aItemsMenu} fixed></MenuHorizontal>
        <Content>
          <Filter btnClick={this.ReciveText} btnText="pulsa!" placeholder="Escrbe aquí..." value="filtro de prueba"></Filter>
          <Prueba></Prueba>
          <Texto texto="Hola">Cuperpo</Texto>
          <Texto texto="Días laborables">
            <SemanaView></SemanaView>
          </Texto>
        </Content>
        

        
      </div>
  }

  ReciveText(text:string){
    alert(text);
  }
}

export default App;
