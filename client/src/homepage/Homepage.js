import React, { Component } from "react";
import StoryTileList from "../tiles/StoryTileList.js";
import "./Homepage.css";

import picnicImg from "../img/37654668_10157550130863572_8372413357658996736_o.jpg";
import trophyImg from "../img/45415073_10217454255853498_3639148136615641088_o.jpg";

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            storyTiles: [
                {
                    authorName: "Sam",
                    _id: "st1",
                    imageUrl: picnicImg,
                    title: "Work Picnic",
                },
                {
                    authorName: "Chantal",
                    _id: "st2",
                    imageUrl: trophyImg,
                    title: "NPC New England Championships",
                }

            ]
        };
    }
    render() {
        return (
            <div className="container">
                <h2>Test!</h2>
                <StoryTileList
                    storyTiles={ this.state.storyTiles }
                    handleOpen={ args => { this.__handleOpen(args); } }
                />
            </div>
        );
    }
    __handleOpen(args) {
        console.log("Story opened: " + args);
    }
}

export default Homepage;
