import React from "react";
import { Link } from "react-router-dom";
import { UsuarioService } from "../../../services/UsuarioService";
import { Usuario } from "../../../model";

export class UsuariosView extends React.Component<{},{users:Usuario[]}>{

    state = {users:[] as Usuario[]}

    componentDidMount(){

            let oService = new UsuarioService();
            oService.Get().then(x=>{
                this.setState({users:x})
            });

    }

    render(){
            let aUsers=null;
            if(this.state.users.length)
                aUsers= this.state.users.map((x)=>{
                    return <li>
                            <Link to={`usuario/${x.id}`}>{x.nombre}</Link>
                        </li>
            });

        return <ul>
            {
                aUsers || "Cargando..."
            }
        </ul>
    }
}
