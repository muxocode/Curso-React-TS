import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import {IItemMenu} from "./IItemMenu"

interface IMenuHorizontalModel{
    items:IItemMenu[],
    fixed?:boolean
}


export class MenuHorizontal extends React.Component<IMenuHorizontalModel>{
    render(){
        return   <Navbar bg="dark" variant="dark" fixed={this.props.fixed?"top":undefined}>
                    <Navbar.Brand href="#home">Clase REACT</Navbar.Brand>
                    <Nav className="mr-auto">
                    {
                        this.props.items.map(x=>{
                            return <Nav.Link key={x.nombe} href={x.url}>{x.nombe}</Nav.Link>
                        })
                    }
                    </Nav>
                </Navbar>
    }
}