import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Cars } from "./components/Cars";

import "./index.css";

const App = () => (
  <div className="container">
      <Cars/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
