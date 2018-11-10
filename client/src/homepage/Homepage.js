import React, { Component } from "react";
import DataCache from "../serviceAccess/DataCache.js";
import StorySnippetModal from "../stories/StorySnippetModal.js";
import StoryTileList from "../tiles/StoryTileList.js";
import HomepageNavbar from "./HomepageNavbar.js";
import "./Homepage.css";


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStorySnippet: null,
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
        console.log("RENDER:", this.state.currentStorySnippet);
        const modalHtml = this.state.currentStorySnippet ?
            (
                <StorySnippetModal
                    handleModalClose={ args => {
                        this.__handleModalClose(args);
                    } }
                    data={ this.state.currentStorySnippet }
                />
            ) : "";
        return (
            <div>
                { modalHtml }
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

    __handleOpen({
        storyId
    }) {
        console.log("GOT: " + storyId);
        this.d_dataCache.getStorySnippet({
            storyId
        })
        .then(storySnippet => {
            console.log("DATA: ", storySnippet);
            this.setState({
                currentStorySnippet: storySnippet,
            });
        })
        .catch(error => {
            console.error("Failed to open story: " + storyId, error);
        })
    }

    __handleOpenProfile(args) {
        console.log("Profile opened: " + args);
    }

    __handleModalClose({
        isOpen,
        storyId,
    }) {
        console.log("Story opened from modal: " + isOpen + ":" + storyId);
        this.setState({
            currentStorySnippet: null
        });
    }
}

export default Homepage;
