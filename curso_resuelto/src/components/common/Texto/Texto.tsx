import React, { PropsWithChildren } from "react"

export interface ITextoModel{
    title:string;
}

export const Texto = (props: Readonly<PropsWithChildren<ITextoModel>>)=>{
    return <p title={props.title}>
            {props.children}
        </p>
}