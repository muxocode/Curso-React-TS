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
            onChange={(e:any)=>{
              this.props.btnClick(e.target.value);
            }}
            ref="myinput"
            placeholder={this.props.placeholder}
            aria-label={this.props.placeholder}
            aria-describedby="basic-addon2"
            defaultValue={this.props.value}
          />
          <InputGroup.Append>
            <Button onClick={()=>{
                this.props.btnClick((this.refs.myinput as HTMLInputElement).value);
              }} variant="outline-secondary">{this.props.btnText}</Button>
          </InputGroup.Append>
        </InputGroup>
    }
}