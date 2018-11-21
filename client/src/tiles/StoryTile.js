import React, { Component } from "react";
import PropTypes from "prop-types";

class StoryTile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div
                className="storyTileContainer"
                            >
                <a
                    onClick={ () => { this.props.handleOpenProfile(this.props.authorId); } }
                >
                    <h2>
                        { this.props.data.authorName }
                    </h2>
                </a>
                <a
                    onClick={ () => {
                        console.log("SENDING: " + this.props.data.storyId);
                        this.props.handleOpen({
                            storyId: this.props.data.storyId
                        });
                    } }
                >
                    <img
                        alt="story_image"
                        className="storyTileImage"
                        src={ this.props.data.imageUrl }
                    />
                </a>
                <a
                    href={ "/#/hillstories/stories?storyId=" + this.props.data.storyId }
                    onClick={ () => {
                        this.props.handleOpen({
                            storyId: this.props.data.storyId
                        });
                    } }
                >
                    <h3>
                        { this.props.data.title }
                    </h3>
                </a>
            </div>
        );
    }
}

StoryTile.propTypes = {
    // Data
    data: PropTypes.shape({
        authorName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        storyId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }),

    // Handlers
    handleOpen: PropTypes.func.isRequired,
    handleOpenProfile: PropTypes.func.isRequired,
};

export default StoryTile;
