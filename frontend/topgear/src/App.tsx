import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TopGear } from "./components/TopGear";

import "./index.css";
import {Box} from "@mui/material";

const App = () => (
  <Box display={'flex'} width={'100%'} flex={1}>
    <TopGear/>
  </Box>
);
ReactDOM.render(<App />, document.getElementById("app"));
