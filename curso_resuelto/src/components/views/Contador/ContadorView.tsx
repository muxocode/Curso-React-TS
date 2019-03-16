import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export interface IContadorModel{
    value?:number,
    step?:number
}

export interface IState{
    value:number
}

export class ContadorView<T extends IContadorModel=IContadorModel> extends React.Component<T,IState>{

    static defaultProps:IContadorModel={
        value:1,
        step:1
    }

    state={
        value: this.props.value!
    }

    render(){
        return  <InputGroup>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="number"
          value={this.state.value.toString()}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={
              ()=>{
                this.Next(-this.props.step!);
                }
              }>-</Button>
          <Button variant="outline-secondary" onClick={
              ()=>{
                  this.Next(this.props.step!);
                }
              }>+</Button>
        </InputGroup.Append>
      </InputGroup>
    }

    Next(toAdd:number){
        this.setState({value: this.state.value + toAdd})
    }
}