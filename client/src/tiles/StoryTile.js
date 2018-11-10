import React, { Component } from "react";
import PropTypes from "prop-types";

class StoryTile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a
                className="singleComment"
                onClick={ () => { this.props.handleOpen(this.props._id); } }
            >
                <h3>{ this.props.data.authorName }</h3>
                <img
                    alt="story_image"
                    className="userImage"
                    src={ this.props.data.imageUrl }
                />
                <p>{ this.props.data.title }</p>
            </a>
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
};

export default StoryTile;
