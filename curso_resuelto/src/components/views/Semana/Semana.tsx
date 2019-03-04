import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export class Semana extends React.Component{
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
}