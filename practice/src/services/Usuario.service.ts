import {Usuario} from "../model/Usuario"
import Axios from "axios"

export class UsuarioService{

private readonly url="http://localhost:3004/usuarios";
async Get():Promise<Usuario[]>{
    var oLlamada= await Axios.get<Usuario[]>(this.url);
    return oLlamada.data;
}

async GetById(id:number):Promise<Usuario>{
    var oLlamada= await Axios.get<Usuario>(`${this.url}/${id}`);
    return oLlamada.data;
}

}