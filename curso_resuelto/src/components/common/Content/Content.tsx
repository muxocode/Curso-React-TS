import React, { PropsWithChildren } from "react"
import "./Content.css"

export const Content = (props: Readonly<PropsWithChildren<{}>>)=>{
    return <div className="appBody">
        <p>
            {props.children}
        </p>
    </div>
}