import React from "react"
import "./Content.css"

export class Content extends React.Component{
    render(){
        return <div className="Content">{this.props.children}</div>
    }
}