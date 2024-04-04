import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(){
    let [keyWord, setKeyWord]=useState("");

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyWord}`)
  
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);    
    } 

     function handleKeywordChange(event){
  
    setKeyWord(event.target.value)
     }


    return(
        <div className="Dictionary">
            
        <form onSubmit={search}>
            <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange} />
           
           </form>
           
           </div>
       )
}