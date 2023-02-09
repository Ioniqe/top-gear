import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Cars } from "./components/Cars";

import "./index.css";
import {Box} from "@mui/material";

const App = () => (
  <Box display={'flex'} width={'100%'} flex={1}>
      <Cars/>
  </Box>
);
ReactDOM.render(<App />, document.getElementById("app"));
