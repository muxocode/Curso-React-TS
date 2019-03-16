import React from "react"
import { ContadorView, IContadorModel } from "./ContadorView";

interface ITimerModel extends IContadorModel{
    time:number
}

export class TimerView extends ContadorView<ITimerModel>{
    constructor(props:ITimerModel) {
        super(props);

        setInterval(()=>{
            this.Next(this.props.step!);
        }, this.props.time || 1000)
    }
}