import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Offering from "./Component/Offering";
import Additionals from "./Component/Additionals";
import Application from "./Component/Application";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Body />
        <About />
        <Offering />
        <Additionals />
        <Application />
      </header>
    </div>
  );
}

export default App;
