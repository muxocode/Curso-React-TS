import { Dia } from "../model/Dia";
import Axios from "axios"

export class DiaService{

private readonly url="http://localhost:3004/dia";
async Get():Promise<Dia[]>{
    var oLlamada= await Axios.get<Dia[]>(this.url);
    return oLlamada.data;
}

}