import React from "react"
import { RouteComponentProps } from "react-router";

interface IParams{
    id?:string
}

export class FichaUsuarioView 
extends React.Component<RouteComponentProps<IParams>>{
    render(){
        return <div>Usuario con id {this.props.match.params.id}</div>
    }
}