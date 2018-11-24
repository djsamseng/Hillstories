import React, { Component } from "react";
import DataCache from "../serviceAccess/DataCache.js";
import ReadStoryText from "./ReadStoryText";
import ReadStoryImage from "./ReadStoryImage";
import ReadStoryQuestion from "./ReadStoryQuestion";
import Constants from "../constants";
import "./ReadStory.css";

class ReadStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story: null
        };
        this.d_dataCache = new DataCache();
        this.refreshStory();
    }

    refreshStory() {
        this.d_dataCache.getStory({
            storyId: "story1", // TODO: Come from props
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
        let contents = null;
        if (story) {
            contents = [];
            for (let i = 0; i < story.contents.length; i++) {
                const content = story.contents[i];
                if (!content.ableToRead) {
                    contents.push((
                        <div
                            className="RSSectionContainer"
                        >
                            <ReadStoryText
                                data={ content }
                            >
                            </ReadStoryText>
                        </div>
                    ));
                    break;
                }
                if (content.type === Constants.CONTENT_TYPES.TEXT) {
                    contents.push((
                        <div
                            className="RSSectionContainer"
                        >
                            <ReadStoryText
                                data={ content }
                            >
                            </ReadStoryText>
                        </div>
                    ));
                }
                else if (content.type === Constants.CONTENT_TYPES.IMAGE) {
                    contents.push((
                        <div
                            className="RSSectionContainer"
                        >
                            <ReadStoryImage
                                data={ content }
                            >
                            </ReadStoryImage>
                        </div>
                    ));
                }
                else if (content.type === Constants.CONTENT_TYPES.QUESTION) {
                    contents.push((
                        <div
                            className="RSSectionContainer"
                        >
                            <ReadStoryQuestion
                                data={ content }
                                handleQuestionAnswer={ args => this.handleQuestionAnswer(args) }
                            >
                            </ReadStoryQuestion>
                        </div>
                    ));
                }
            }
        }


        return (
            <div>
                <div className="storyTileListContainer">
                    <div className="storyTileContainer">
                        <h2>{ story ? story.title : ""}</h2>
                        <img
                            className="storyTileImage"
                            src={ story ? story.imageUrl : "" }/>
                        { contents }
                    </div>
                </div>
            </div>
        );
    }

    handleQuestionAnswer(args) {
        if (this.state.story) {
            this.d_dataCache.handleQuestionAnswer({
                storyId: this.state.story._id,
                questionId: args.questionId,
                userAnswer: args.userAnswer
            })
            .then(() => {
                return this.refreshStory();
            });
        }
    }
}

export default ReadStory
