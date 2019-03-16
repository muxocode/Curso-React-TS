import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Usuario } from "../../../model/Usuario";
import { ObjectHelper } from "../../../helpers/ObjectHelper";
import { UsuarioService } from "../../../services/UsuarioService";


export class InsertUsuarioView extends React.Component<RouteComponentProps<{id?:string}>, {user?:Usuario}>{

    componentDidMount(){
        debugger;
        if(this.props.match.params.id){
            let oService = new UsuarioService();
            oService.GetById(parseInt(this.props.match.params.id)).then(x=>{
                this.setState({user:x})
            });
        }
    }

    state = {user:new Usuario()}
    
    render(){

        if(this.props.match.params.id && !this.state.user)
            return <div>Cargando</div>

        return <div>
            <Form>
                <Form.Group as={Row}>
                    <Col sm="2">   
                        <Form.Label column>
                            Nombre
                        </Form.Label>
                    </Col>
                    <Col sm="10">
                        <Form.Control defaultValue={this.state.user.nombre} name="nombre" onChange={(e:any)=>this.change(e.target)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                <Col sm="2">   
                        <Form.Label column>
                            Rol
                        </Form.Label>
                    </Col>
                    <Col sm="10">
                    <Form.Control as="select" name="idRol" onChange={(e:any)=>this.change(e.target)} defaultValue={this.state.user.idRol}>
                        <option value={1}>User</option>
                        <option value={2}>Admin</option>
                    </Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} name="age">
                    <Col sm="2">   
                        <Form.Label column>
                            Edad
                        </Form.Label>
                    </Col>
                    <Col sm="10">
                        <Form.Control type="number" name="age" onChange={(e:any)=>this.change(e.target)} defaultValue={`${this.state.user.age||""}`}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="button" onClick={()=>{
                            let oResult = this.state.user;
                            debugger;
                        }}>Guardar</Button>
                    </Col>
                </Form.Group>
            </Form>;
        </div>
    }

    change(e:HTMLInputElement){
        
        ObjectHelper.Update(this.state.user, e.name, e.value);
    }
}