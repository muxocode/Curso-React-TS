import React from "react"
import {Listado} from "../../components/common/Listado/Listado"
import { IItemListadoModel } from "../../components/common/Listado/ItemListado";
import { Filter } from "../../components/common/filter";

interface ISemanaState{
    DiasFiltrado:IItemListadoModel[]
}

export class SemanaView extends React.Component<{}, ISemanaState>{
    aDias:IItemListadoModel[]=
    ["Lunes", 
    "Martes", 
    "Miércoles", 
    "Jueves", 
    "Viernes", 
    "Sábado", 
    "Domingo"].map((value, index)=>{
        return {id:index+1, nombre:value}
    });
    
    state = {
        DiasFiltrado: this.aDias
    }


    constructor(props:any){
        super(props);

        this.Filtrar=this.Filtrar.bind(this);
    }

 
    render(){

        return <div>
            <Filter btnClick={this.Filtrar} btnText="filtrar"></Filter>
            <Listado items={this.state.DiasFiltrado}></Listado>
        </div>
    }

    Filtrar(texto:string){
        let aDiasFiltrado = this.aDias.filter(x=>x.nombre.toUpperCase().endsWith(texto.toUpperCase()))

        this.setState({DiasFiltrado: aDiasFiltrado})
    }
}