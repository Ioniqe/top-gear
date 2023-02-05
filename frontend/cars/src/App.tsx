import React from "react";
import ReactDOM from "react-dom";
import { Cars } from "./components/Cars";

import "./index.css";

const App = () => (
  <div className="container">
      <Cars/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
