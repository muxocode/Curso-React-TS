import React from "react"
import {IItemListadoModel, ItemListado} from "./ItemListado"
import {Container} from "react-bootstrap"

interface IListadoModel{
    items:IItemListadoModel[];
}

export class Listado extends React.Component<IListadoModel>{
    render(){
        return <Container>
            {
                this.props.items.map(x=>{
                    return <ItemListado key={x.id} {...x}></ItemListado>
                })
            }
        </Container>
    }
}