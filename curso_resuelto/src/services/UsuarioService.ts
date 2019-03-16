import {Usuario} from "../model"
import Axios from "axios"

export class UsuarioService{
    sPath:string = "http://localhost:3004/usuarios";

    async Get():Promise<Usuario[]>{
        let oData = await Axios.get<Usuario[]>(this.sPath);
        return oData.data;
    }

    async GetById(id:number):Promise<Usuario>{

        this.sPath = `${this.sPath}/${id}`;


        let oData = await Axios.get<Usuario>(this.sPath);
        return oData.data;
    }


}