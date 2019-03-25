import React from "react"
import { InputGroup, Button, FormControl } from "react-bootstrap";

export interface IContadorModel{
    value?:number;
    step?:number;
    showButtons?:boolean
}

interface IState{
    currentValue:number;
    //color:string;
}

interface IState2{
    [key:string]:string
}


export class ContadorView<T extends IContadorModel =IContadorModel> extends React.Component<T,IState>{

constructor(props:T){
    super(props);

    /*setInterval(()=>{
        alert("Hola");
    },1000);*/
}

static defaultProps:IContadorModel={
    value:0,
    step:1,
    showButtons:true
}

state={
    currentValue:this.props.value!,
    //color:""
}

render(){


    return   <InputGroup className="mb-3">
                <InputGroup.Prepend hidden={!this.props.showButtons}>
                    <Button variant="outline-secondary" 
                        onClick={()=>{this.Sumar(-this.props.step!)}}>-</Button>
                    <Button onClick={()=>{this.Sumar(this.props.step!)}} 
                        variant="outline-secondary">+</Button>
                </InputGroup.Prepend>
                <FormControl ref="mypinput" aria-describedby="basic-addon1" value={this.state.currentValue.toString()} readOnly />
            </InputGroup>
}

Sumar(cantidad:number){

    let iResult = this.state.currentValue + cantidad;
    let sColor="";
    if(this.refs.mypinput as HTMLElement){
        if(iResult<0)
        {
            //sColor="red";
            (this.refs.mypinput as HTMLElement).style.color="red";
            //document.getElementById("mypinput")!.style.color="red";
        }
        else{
            (this.refs.mypinput as HTMLElement).style.color="";
        }
    }

    //this.setState({currentValue:iResult, color:sColor});
    this.setState({currentValue:iResult});

}

}