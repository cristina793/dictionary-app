import React from "react";

export default function Example(props){
    if(props.example){
        return(
            <div className="Example">
                <p>Example: {props.example}</p>
            </div>
        )

    }
    else{
        return null;
    }
}