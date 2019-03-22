import React, { CSSProperties } from 'react';
import './App.css';
import {Prueba} from "./components/prueba/Prueba"
import {Content, MenuHorizontal} from "./components/common"
import mylogo from "./logo.svg"
import {SemanaView} from "./Views"
import {Texto} from "./components/common"
import { IItemMenu } from './components/common/MenuHotizontal/IItemMenu';
import {Filter} from "./components/common/filter"
import { BrowserRouter, Route } from 'react-router-dom';
import * as Vistas from "./Views"

class App extends React.Component {
  render() {

    let aItemsMenu:IItemMenu[]=[];

    aItemsMenu.push({nombe:"Home", url:"/home"});
    aItemsMenu.push({nombe:"About", url:"/about"});
    aItemsMenu.push({nombe:"Usuarios", url:"/usuarios"});
    aItemsMenu.push({nombe:"Semana", url:"/semana"});
    aItemsMenu.push({nombe:"Contador", url:"/contador"});
    aItemsMenu.push({nombe:"Sumador", url:"/sumador"});



    return <div className={"clase"} style={{height:"5000px"}}>
    <BrowserRouter>
          <Content>
            <MenuHorizontal items={aItemsMenu} fixed></MenuHorizontal>
            <Route exact path="/" component={Vistas.HomeView}></Route>
            <Route exact path="/Home" component={Vistas.HomeView}></Route>
            <Route exact path="/USuarios" component={Vistas.UsuariosView}></Route>
            <Route exact path="/About" component={Vistas.AboutView}></Route>
            <Route exact path="/Semana" component={Vistas.SemanaView}></Route>
            <Route exact path="/Usuarios/:id" component={Vistas.FichaUsuarioView}></Route>
            <Route exact path="/Contador" component={Vistas.ContadorView}></Route>
            <Route exact path="/Sumador" component={Vistas.SumadorView}></Route>          

          </Content>
    </BrowserRouter>

      </div>
  }

  ReciveText(text:string){
    alert(text);
  }
}

export default App;
