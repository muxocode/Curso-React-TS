import React from "react"
import {Row, Col} from "react-bootstrap"
import { IItemListadoModel } from "./IItemListadoModel";

export const ItemListado = (props: Readonly<IItemListadoModel>)=>{
return <Row>
            <Col xs={12}>
               {props.text} 
            </Col>
       </Row>
}