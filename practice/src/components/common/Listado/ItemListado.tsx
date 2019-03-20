import React from "react"
import {Row, Col} from "react-bootstrap"

export interface IItemListadoModel{
    id:number
    nombre:string
}

export const ItemListado=(props:IItemListadoModel)=>{
    return <Row id={props.id.toString()}>
        <Col sm={12}>
            {props.nombre}
        </Col>
    </Row>
}