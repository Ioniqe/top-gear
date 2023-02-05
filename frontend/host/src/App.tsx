import React from "react";
import ReactDOM from "react-dom";
import { TopGear } from "topgear/TopGear";
import { Cars } from "cars/Cars";
import "./index.css";

const App = () => (
    <div className="container">
        <TopGear/>
        <Cars/>
    </div>
);
ReactDOM.render(<App/>, document.getElementById("app"));
