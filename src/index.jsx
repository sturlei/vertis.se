import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./scss/main.scss";
import { Provider } from "react-redux";
// router
import RouterComponent from "./Router";

// store
import configStore from "./store/configStore";

const store = configStore();


const Router = BrowserRouter || HashRouter;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RouterComponent />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById( 'root' )
);
