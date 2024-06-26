
import './App.css';
import Dictionary from"./Dictionary.js";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header 
    "></header>
    <main>
      
      <img src={logo}
         className="App-logo img-img-fluid"
         alt="logo"/>
       <Dictionary defaultKeyword="sunset"/></main>
    <footer className="App-footer"> This project was coded by <a href="https://www.shecodes.io/graduates/103776-cristina-mihalachi" target="_blank" rel="noreferrer">Cristina Mihalachi</a> and it is<a href="https://github.com/cristina793/dictionary-app"> open-sourced on Github</a> .</footer>
    </div>
    </div>
  );
}

export default App;
