/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import App from './App';
import AboutPage from 'views/AboutPage/AboutPage';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={App} />
      <Route path="aboutus" component={AboutPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);