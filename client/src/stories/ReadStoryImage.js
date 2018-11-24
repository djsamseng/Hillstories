import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ReadStoryImage.css";

class ReadStoryImage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <img
                    className="storyTileImage"
                    src={ this.props.data.image }
                >
                </img>
                <p>
                { this.props.data.text }
                </p>
            </div>
        );
    }
}

ReadStoryImage.propTypes = {
    data: PropTypes.shape({
        ableToRead: PropTypes.bool.isRequired,
        image: PropTypes.isRequired,
        text: PropTypes.string.isRequired,
    })
};

export default ReadStoryImage;
