import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from"./Results.js";

export default function Dictionary(props){
    let [loaded, setLoaded]=useState(false);    
    let [results, setResults]=useState(null);
    let [keyWord, setKeyWord]=useState(props.defaultKeyword);

    function handleResponse(response){
        setResults(response.data[0]);
    }
function search(keyword){
   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse); 

}
    function handleSubmit(event){
        event.preventDefault();
        search();
    } 

     function handleKeywordChange(event){
    setKeyWord(event.target.value)
     }
     function load()
     {setLoaded(true);
    search();}
if (loaded){

    return(
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input
            type="search"
            onChange={handleKeywordChange}
            className="form-floating"
            defaultValue={props.defaultKeyword}/>
           </form>
           <div className="hint">
            suggested words: sunset, yoga, forest...
           </div>
        </section>
           < Results results={results} />
           </div>
       )
}else{load(); return "Loading";}}