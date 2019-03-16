import React from "react"
import { ItemListado } from "./ItemListado";
import { IListadoModel } from "./IListadoModel";

export const Listado = (props: Readonly<IListadoModel>)=>{
    return <div>
                {
                    props.items.map(x=>{
                        return <ItemListado key={x.id} {...x}/>
                    })
                }
            </div>
}