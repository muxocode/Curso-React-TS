import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Listado} from "../../common/Listado/index.d"
import { Filter } from "../../common/Filter";
import { IItemListadoModel } from "../../common/Listado/IItemListadoModel";

/*

**P3**

export class SemanaView extends React.Component{
    listaDias:string[]=[
        "lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"
    ];

    render(){
        return <Container>
            <Row>
            {
                //Para filtrar los días que empiezan por s
                //this.listaDias.filter(x=>x.toUpperCase().startsWith("S"))


                this.listaDias.map(x=>{
                    return <Col key={x} xs={12}>
                        <div>{x}</div>
                    </Col>
                    })
            }
            </Row>
        
        </Container>
    }
}*/

interface IState{
    filtro?:string
}

//P7
export class SemanaView extends React.Component<{},IState>{
    listaDias:string[]=[
        "lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"
    ];

    state:IState={}

    render(){
        let aListaFiltro = this.listaDias;
        if(this.state.filtro)
            aListaFiltro = this.listaDias.filter(x=>{
                return x.toUpperCase().startsWith(this.state.filtro!.toUpperCase());
            });

        let aItems = aListaFiltro.map((x, i)=>{
            return {
                id: i,
                text: x
            } as IItemListadoModel
        })
        return <div>
                    <Filter 
                        placeHolder="Escribe tu texto..." 
                        btnText="Filtro"
                        onChange={(e:string)=>{this.setState({filtro:e})}}
                    />
                    <Listado items={aItems}></Listado>
                </div>
        
    }
}
