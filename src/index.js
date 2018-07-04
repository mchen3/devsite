import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';


import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-react.css?v=1.1.0";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
         //console.log(prop);
         //console.log(key);
         //console.log(prop.component);



        return <Route path={prop.path} key={key} component={prop.component} />;

      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
