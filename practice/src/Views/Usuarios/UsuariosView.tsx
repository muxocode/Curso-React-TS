import React from "react"
import {Usuario} from "../../model/Usuario"
import { Link } from "react-router-dom";

export class UsuariosView extends React.Component{
    render(){

        let aListaUsuarios:Usuario[]=[];

        for(let i=1;i<30;i++){
            aListaUsuarios.push({id:i, nombre:`USuario ${i}`});
        }

        return <div>
           {
               aListaUsuarios.map(x=>{
                   return <p key={x.id} >
                       <Link to={`/Usuarios/${x.id}`}>{x.nombre}</Link>
                   </p>
               })
           } 
        </div>
    }
}