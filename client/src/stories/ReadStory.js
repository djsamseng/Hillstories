import React, { Component } from "react";
import DataCache from "../serviceAccess/DataCache.js";
import HomepageNavbar from "../homepage/HomepageNavbar.js";

class ReadStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: null
        };
        this.d_dataCache = new DataCache();
        this.d_dataCache.getStory({
            storyId: "story1"
        })
        .then(story => {
            this.setState({
                story
            });
        });
    }

    render() {
        const renderData = {};
        const story = this.state.story;
        let content = null;
        if (story) {
            const texts = story.contents.filter(content => {
                return content.type === "TEXT";
            })
            .map(content => {
                return content.text;
            });
            content = texts.map(text => {
                return (
                    <p>{ text }</p>
                );
            });
        }

        return (
            <div>
                <HomepageNavbar/>
                <div className="container">
                    <div className="storyTileListContainer">
                        <div className="storyTileContainer">
                            <h2>{ story ? story.title : ""}</h2>
                            <img
                                className="storyTileImage"
                                src={ story ? story.imageUrl : "" }/>
                            { content }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReadStory
