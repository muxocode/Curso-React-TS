import React from "react"
import {Listado} from "../../components/common/Listado/Listado"
import { IItemListadoModel } from "../../components/common/Listado/ItemListado";

export class SemanaView extends React.Component{
    render(){

        let aDias:IItemListadoModel[] = 
        ["Lunes", 
        "Martes", 
        "Miércoles", 
        "Jueves", 
        "Viernes", 
        "Sábado", 
        "Domingo"].map((value, index)=>{
            return {id:index+1, nombre:value}
        });

        let aDiasFiltrado = aDias.filter(x=>x.nombre.toUpperCase().endsWith("S"))
        
        return <div>
            <Listado items={aDiasFiltrado}></Listado>
        </div>
    }
}