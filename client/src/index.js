import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from "react-router";
import { HashRouter, BrowserRouter } from "react-router-dom";
import './index.css';
import Homepage from './homepage/Homepage';
import ReadStory from "./stories/ReadStory";
import * as serviceWorker from './serviceWorker';

import Hillstories from "./Hillstories";
import BuiltByC from "./builtbyc/BuiltByC";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faHome);

// exact path if it's going to have a different suburl
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route
                exact path="/"
                component={ BuiltByC }
            >
            </Route>
            <Route
                path="/getstarted"
                component={ BuiltByC }
            >
            </Route>
            <Route
                exact path="/hillstories"
                component={ Hillstories }
            >
            </Route>
            <Route
                path="/hillstories/stories"
                component={ Hillstories }
            >
            </Route>
        </div>
    </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
