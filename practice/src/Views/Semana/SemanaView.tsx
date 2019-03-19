import React from "react"

export class SemanaView extends React.Component{
    render(){

        let aDias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

        return <div>
            {
                /*aDias.map(x=>{
                    return <p>{x}</p>
                })*/

                aDias.filter(x=>x.toUpperCase().endsWith("S")).map(x=>
                        <p key={x}>{x}</p>
                )
            }
        </div>
    }
}