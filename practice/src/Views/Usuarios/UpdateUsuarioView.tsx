import React from "react"
import {UsuarioFormView, IUsuarioFormModel} from "./UsuarioFormView"
import { Usuario } from "../../model/Usuario";
import { RouteComponentProps } from "react-router";
import { UsuarioService } from "../../services/Usuario.service";

interface IUpdateUsuarioModel extends IUsuarioFormModel{
    Cargado:boolean
}

interface IParams{
    id?:string
}

export class UpdateUsuarioView extends UsuarioFormView<RouteComponentProps<IParams>,IUpdateUsuarioModel>{
    state: IUpdateUsuarioModel={
        User: new Usuario(),
        Cargado:false
    }

    componentDidMount()
    {
        var oService = new UsuarioService();
        oService.GetById(parseInt(this.props.match.params.id!)).then(res=>{
            this.setState({User:res, Cargado:true});
        })
    }
    
    
    Guardar(e: any): void {
        //Update: Llamar a PATCH/PUT

        alert("Actualizado");
        console.log(this.state.User);
    }

    render(){
        let oResult;

        if(this.state.Cargado)
            oResult= this._render();
        else
            oResult=<div>Cargando...</div>

        return oResult;
    }
}