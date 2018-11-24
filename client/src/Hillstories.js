import React, { Component } from "react";
import { Route } from "react-router";
import Homepage from "./homepage/Homepage";
import HomepageNavbar from "./homepage/HomepageNavbar";
import ReadStory from "./stories/ReadStory";

class Hillstories extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <HomepageNavbar
                />
                <div className="container"
                >
                    <Route
                        exact path="/hillstories"
                        component={ Homepage }
                    >
                    </Route>
                    <Route
                        path="/hillstories/stories"
                        component={ ReadStory }
                    >
                    </Route>
                </div>
            </div>
        );
    }
}

export default Hillstories;
