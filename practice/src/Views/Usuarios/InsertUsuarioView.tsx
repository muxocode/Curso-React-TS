import React from "react"
import {UsuarioFormView, IUsuarioFormModel} from "./UsuarioFormView"
import { Usuario } from "../../model/Usuario";

interface IInsertUsuarioModel extends IUsuarioFormModel{

}

export class InsertUsuarioView extends UsuarioFormView<{},IInsertUsuarioModel>{
    state: IInsertUsuarioModel={
        User: new Usuario()
    }
    
    
    Guardar(e: any): void {
        //Insert: Llamar a POST

        alert("Insertado");
    }
}