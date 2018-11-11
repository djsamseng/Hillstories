import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import BuiltByC from "./builtbyc/BuiltByC";

const Routes = () => (
    <Switch>
        <Route
            exact path="/"
            component={ BuiltByC }
        />
        <Route
            exact path="/hillstories"
            component={ Homepage }
        />
    </Switch>
);

export default Routes;
