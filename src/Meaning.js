import React from "react";
import Synonyms from "./Synonyms.js";
import Example from "./Example.js";
import "./Meaning.css"

export default function Meaning(props) {
    return(<div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(
        function(definition,index){
        return(
        <div key={index}>
     <div className="definition">
      {definition.definition}
      </div>
    <div className="example">
        <em><Example example={definition.example } /> </em> </div>
    
        <Synonyms synonyms={definition.synonyms} />
            </div>)
           
    })}
 
    </div>);
}