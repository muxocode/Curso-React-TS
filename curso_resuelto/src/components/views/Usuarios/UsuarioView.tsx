import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { UsuarioService } from "../../../services/UsuarioService";
import { Usuario } from "../../../model";

export class UsuarioView extends React.Component<RouteComponentProps<{id:string}>, {user?:Usuario}>{

    componentDidMount(){
        let oService = new UsuarioService();
        oService.GetById(parseInt(this.props.match.params.id)).then(x=>{
            this.setState({user:x})
        });
    }

    state = {user:{} as Usuario}
    
    render(){
        return <div>
            {
                this.state.user
                    ?`Usuario ${this.state.user.nombre} cargado en el sistema`
                    :"Cargando..."
            }
        </div>
    }
}
