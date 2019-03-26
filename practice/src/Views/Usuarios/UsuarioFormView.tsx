import React from "react"
import { Form, Col, Row, Button } from "react-bootstrap";
import { Usuario } from "../../model/Usuario";
import { UsuarioService } from "../../services/Usuario.service";

export interface IUsuarioFormModel{
    User: Usuario;
}

export abstract class UsuarioFormView<T,S extends IUsuarioFormModel> 
                extends React.Component<T,S>{

    abstract get state():S;

    constructor(props:T) {
        super(props);
        
        this.Guardar = this.Guardar.bind(this);
        this.Asignar = this.Asignar.bind(this);
        this.FormCambio = this.FormCambio.bind(this);


    }

    render(){
        return this._render();
    }

    _render(){
        return <Form>
            <Form.Group as={Row} controlId="formPlaintextEmail">
            <Col sm="2">
                <Form.Label column>
                    Nombre
                </Form.Label>
            </Col>
            <Col sm="10">
                <Form.Control name="nombre" onChange={this.FormCambio} defaultValue={this.state.User.nombre} placeholder="Escribe tu nombre..." />
            </Col>
            </Form.Group>
        
            <Form.Group as={Row} controlId="formPlaintextEmail">
            <Col sm="2">
                <Form.Label column>
                    Edad
                </Form.Label>
            </Col>
            <Col sm="10">
                <Form.Control name="age" onChange={this.FormCambio} defaultValue={`${this.state.User.age}`} placeholder="Escribe tu edad..." type="number" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formPlaintextEmail">
            <Col sm="2">
                <Form.Label column>
                    Rol
                </Form.Label>
            </Col>
            <Col sm="10">
            <Form.Control as="select" name="idRol" onChange={this.FormCambio}>
                <option value={1}>User</option>
                <option value={2}>Admin</option>
            </Form.Control>
            </Col>
            </Form.Group>
            <Button onClick={this.Guardar} variant="primary" type="button">
                Submit
            </Button>
      </Form>;
    }

    abstract Guardar(e:any):void;

    Asignar<T,V>(oObj:T, field:any, value:V){
        (oObj as any)[field] = value;
    }

    FormCambio(e:any){
        let oElement = e.target as HTMLInputElement;
        this.Asignar(this.state.User, oElement.name, oElement.value);
    }
}