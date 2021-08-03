import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Offering from "./Component/Offering";
import Additionals from "./Component/Additionals";
import Application from "./Component/Application";
import Talk from "./Component/Talk";
import Footer from "./Component/Footer";
import Copyrgiht from "./Component/Copyright";

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
        <Talk />
        <Footer />
        <Copyrgiht />
      </header>
    </div>
  );
}

export default App;
