import React from "react"
import { InputGroup, FormControl, Button } from "react-bootstrap"

interface IFilterModel{
    placeholder?:string
    btnText:string
    btnClick:(value:string)=>void
    value?:string
}

export class Filter extends React.Component<IFilterModel>{
    render(){
        return <InputGroup className="mb-3">
          <FormControl
            placeholder={this.props.placeholder}
            aria-label={this.props.placeholder}
            aria-describedby="basic-addon2"
            defaultValue={this.props.value}
          />
          <InputGroup.Append>
            <Button onClick={()=>{
                this.props.btnClick("holii");
              }} variant="outline-secondary">{this.props.btnText}</Button>
          </InputGroup.Append>
        </InputGroup>
    }
}