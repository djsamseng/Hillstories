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
                    onClick={ () => { this.props.handleOpen(this.props._id); } }
                >
                    <img
                        alt="story_image"
                        className="storyTileImage"
                        src={ this.props.data.imageUrl }
                    />
                </a>
                <a
                    onClick={ () => { this.props.handleOpen(this.props._id); } }
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
        title: PropTypes.string.isRequired,
    }),

    // Handlers
    handleOpen: PropTypes.func.isRequired,
    handleOpenProfile: PropTypes.func.isRequired,
};

export default StoryTile;
