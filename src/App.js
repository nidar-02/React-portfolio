import React from "react";
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Section from "./Components/Section";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
  <div className="App">
   <Header/>
    <Main />
    <About/>
    <Section/>
    <Contact/>
    
  </div>
  );
}

export default App;
