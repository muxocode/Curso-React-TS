import React from "react"

interface IContadorModel{
    value?:number;
    step?:number;
}

export class ContadorView extends React.Component<IContadorModel>{

static defaultProps:IContadorModel={
    value:0,
    step:1
}

render(){
    return <div>
        
    </div>
}

}