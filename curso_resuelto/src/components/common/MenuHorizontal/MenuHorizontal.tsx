import React from "react"
import { Navbar, Nav } from "react-bootstrap";

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
    <Navbar.Brand href="#home">MiApp</Navbar.Brand>
    <Nav className="mr-auto">
    {
        props.items.map(x=>{
            return <Nav.Link key={x.id} href={x.link}>{x.text}</Nav.Link>
        })
    }
    </Nav>
  </Navbar>
}