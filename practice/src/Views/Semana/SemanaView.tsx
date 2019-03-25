import React from "react"
import {Listado} from "../../components/common/Listado/Listado"
import { IItemListadoModel } from "../../components/common/Listado/ItemListado";
import { Filter } from "../../components/common/filter";
import {DiaService} from "../../services/Dia.service"
import { Dia } from "../../model/Dia";

interface ISemanaState{
    DiasFiltrado:IItemListadoModel[];
    aDias:Dia[];
}

export class SemanaView extends React.Component<{}, ISemanaState>{

    
    state = {
        DiasFiltrado: [],
        aDias: []
    }


    constructor(props:any){
        super(props);

        this.Filtrar=this.Filtrar.bind(this);
    }

    componentDidMount(){
        var oService = new DiaService();
        setTimeout(()=>{
        oService.Get().then(lista=>{
         
            this.setState({aDias:lista, DiasFiltrado:lista})
        });},2000);
    }
 
    render(){

        let oResult;

        if(this.state.aDias.length===0){
           oResult= <div>Cargando...</div> 
        }      
        else{

            oResult=  <div>
            <Filter btnClick={this.Filtrar} btnText="filtrar"></Filter>
            <Listado items={this.state.DiasFiltrado}></Listado>
            
        </div>
        }

        return oResult;
    }

    Filtrar(texto:string){
        let aDias = this.state.aDias as Dia[];
        let aDiasFiltrado = aDias.filter(x=>x.nombre.toUpperCase().endsWith(texto.toUpperCase()))

        this.setState({DiasFiltrado: aDiasFiltrado})
    }
}