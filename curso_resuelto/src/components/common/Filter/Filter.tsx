import React, { PropsWithChildren } from "react"
import { Button, InputGroup, FormControl } from "react-bootstrap";

export interface IFilterModel{
    btnText:string,
    placeHolder?:string,
    value?: string
}

export const Filter = (props: Readonly<PropsWithChildren<IFilterModel>>)=>{
    return   <InputGroup className="mb-3">
                <FormControl
                placeholder={props.placeHolder}
                aria-label={props.placeHolder}
                aria-describedby="basic-addon2"
                defaultValue={props.value}
                />
                <InputGroup.Append>
                <Button variant="outline-secondary">{props.btnText}</Button>
                </InputGroup.Append>
            </InputGroup>
}