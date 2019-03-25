import React from "react"
import {Usuario} from "../../model/Usuario"
import { Link } from "react-router-dom";
import {UsuarioService} from "../../services/Usuario.service"

export class UsuariosView extends React.Component<{},{aListaUsuarios:Usuario[]}>{

    state={
        aListaUsuarios:[]
    }

    componentDidMount(){
        var oService= new UsuarioService();
        oService.Get().then(x=>{
            this.setState({aListaUsuarios:x})
        })
    }

    render(){
        return <div>
           {
               (this.state.aListaUsuarios as Usuario[]).map(x=>{
                   return <p key={x.id} >
                       <Link to={`/Usuarios/${x.id}`}>{x.nombre}</Link>
                   </p>
               })
           } 
        </div>
    }
}