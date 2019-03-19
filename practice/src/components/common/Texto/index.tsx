import React from "react"

interface ITextoModel{
    texto:string;
}

export class Texto extends React.Component<ITextoModel>{

    render(){
        return <div>
            <h1>{this.props.texto}</h1>
            {this.props.children}
        </div>
    }
}