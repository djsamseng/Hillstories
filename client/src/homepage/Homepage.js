import React, { Component } from "react";
import DataCache from "../serviceAccess/DataCache.js";
import StoryTileList from "../tiles/StoryTileList.js";
import HomepageNavbar from "./HomepageNavbar.js";
import "./Homepage.css";


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyTiles: [],
        }
        this.d_dataCache = new DataCache();
        this.d_dataCache.getStoryTiles()
        .then(storyTiles => {
            this.setState({
                storyTiles,
            });
        });
    }

    render() {
        return (
            <div>
                <HomepageNavbar
                />
                <div className="container">
                    <StoryTileList
                        storyTiles={ this.state.storyTiles }
                        handleOpen={ args => { this.__handleOpen(args); } }
                        handleOpenProfile={ args => { this.__handleOpenProfile(args); } }
                    />
                </div>
            </div>
        );
    }

    __handleOpen(args) {
        console.log("Story opened: " + args);
    }

    __handleOpenProfile(args) {
        console.log("Profile opened: " + args);
    }
}

export default Homepage;
