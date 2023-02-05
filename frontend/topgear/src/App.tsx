import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TopGear } from "./components/TopGear";

import "./index.css";

const App = () => (
  <div className="container">
    <TopGear/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
