import React from "react"
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLink from "react-bootstrap/NavLink";

export interface IMenuItem{
    id:number;
    text:string;
    link:string; 
}

export interface IMenuHorizontal {
    items:IMenuItem[]
}

export const MenuHorizontal = (props:IMenuHorizontal)=>{
    return   <Navbar bg="light" variant="light" fixed="top">
    <Navbar.Brand>MiApp</Navbar.Brand>
    <Nav className="mr-auto">
    {
        props.items.map(x=>{
            return <Nav.Link key={x.id}>
                <Link to={x.link}>{x.text}</Link>
             </Nav.Link>
        })
    }
    </Nav>
  </Navbar>
}