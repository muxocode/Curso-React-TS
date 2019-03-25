import React from "react"
import {ContadorView, IContadorModel} from "./ContadorView"

interface ISumadorModel extends IContadorModel{
    time?:number
}

export class SumadorView extends ContadorView<ISumadorModel>{

    static defaultProps={
        time:1000,
        value:0,
        step:1,
        showButtons:false
    }

    constructor(props:ISumadorModel){
        super(props);
    }

    componentDidMount(){
        setInterval(()=>{
            this.Sumar(this.props.step!);
        },this.props.time!)
    }
}