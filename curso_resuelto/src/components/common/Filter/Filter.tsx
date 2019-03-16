import React, { LegacyRef } from "react"
import { Button, InputGroup, FormControl } from "react-bootstrap";

export interface IFilterModel{
    btnText:string,
    placeHolder?:string,
    value?: string,
    onChange:(val:string)=>void
}

export class Filter extends React.Component<IFilterModel>{
    myInput?: HTMLInputElement;
    render()
    {
        return   <InputGroup className="mb-3">
        <FormControl
        ref={(x: any)=>{this.myInput=x as HTMLInputElement}}
        placeholder={this.props.placeHolder}
        aria-label={this.props.placeHolder}
        aria-describedby="basic-addon2"
        defaultValue={this.props.value}
        onChange={(e:any)=>{
            this.props.onChange(e.target.value);
        }}
        />
        <InputGroup.Append>
            <Button variant="outline-secondary" onClick={()=>{
                this.props.onChange(this.myInput!.value)
            }}>{this.props.btnText}</Button>
        </InputGroup.Append>
    </InputGroup>
    }
} 