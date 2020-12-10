import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./scss/main.scss";
// styles
import BaseStyle from "./style/BaseStyle";
import GlobalVariables from "./style/GlobalVariables";
import Themes from "./style/theme/Themes";
// router
import RouterComponent from "./Router";

const Router = BrowserRouter || HashRouter;
const CurrentTheme = Themes.Standard;

ReactDOM.render(
  <React.StrictMode>
    <BaseStyle />
    <GlobalVariables />
    <CurrentTheme />
    <Router>
      <RouterComponent />
    </Router>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
