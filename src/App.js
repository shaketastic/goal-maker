import React from "react";
import "./App.css";
import Lists from "./components/Lists";
import Notes from "./components/Notes";
import Stats from "./components/Stats";
import NavBar from "./components/NavBar";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Stats />
        <Notes />
        <Lists />
      </div>
    );
  }
}

export default App;
