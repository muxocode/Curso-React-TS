import React from "react"
import { RouteComponentProps } from "react-router";
import { UsuarioService } from "../../services/Usuario.service";
import { Usuario } from "../../model/Usuario";

interface IParams{
    id?:string
}

export class FichaUsuarioView 
extends React.Component<RouteComponentProps<IParams>,{user?:Usuario}>{

state = {user:undefined}

    componentDidMount(){
        var oService= new UsuarioService();
        oService.GetById(parseInt(this.props.match.params.id!)).then(x=>{
            this.setState({user:x})
        })
    }
    
    render(){
        if(this.state.user)
        {
            let user:Usuario = this.state.user!
            return <div>Usuario con id {user.id} y con nombre {user.nombre}</div>

        }
        else
            return <div>Cargando</div>
    }
}