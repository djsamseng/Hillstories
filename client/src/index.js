import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import './index.css';
import Homepage from './homepage/Homepage';
import Routes from "./routes"
import * as serviceWorker from './serviceWorker';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faHome);

ReactDOM.render(
    <HashRouter>
        <Routes />
    </HashRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
