import React from "react";
import ReactDOM from "react-dom";
import Controller from "./controller";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Controller />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
