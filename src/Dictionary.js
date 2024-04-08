import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from"./Results.js";
import Photos from "./Photos";

export default function Dictionary(props){
    let [loaded, setLoaded]=useState(false);    
    let [results, setResults]=useState(null);
    let [keyWord, setKeyWord]=useState(props.defaultKeyword);
    let[photos, setPhotos]=useState(null);


    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response){
        console.log(response);
        setPhotos(response.data.photos);
    
    }
function search(){
   let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
   axios.get(apiUrl).then(handleDictionaryResponse);

let pexelsApiKey="GUBAAD4W0deohCAYsaXJeb2KiU74ZSkWpwjng9vCnwh0hOj1tA4FTVaf";
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
let headers = { Authorization: `${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

}
    function handleSubmit(event){
        event.preventDefault();
        search();
    } 

     function handleKeywordChange(event){
              setKeyWord(event.target.value);
     }
            function load()
            {setLoaded(true);
                 search();
            }
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
                             defaultValue={props.defaultKeyword}
                             />
                        </form>
                        <div className="hint">
                         suggested words: sunset, yoga, forest...
                        </div>
                   </section>
                < Results results={results} />
                < Photos photos={photos} />
                </div>
       )
}else{ 
    load(); 
    return "Loading";}}