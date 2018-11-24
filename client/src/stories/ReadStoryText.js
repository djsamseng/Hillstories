import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ReadStoryText.css";

class ReadStoryText extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let text = this.props.data.text;
        let blurClassName = "RSTNotBlurry";
        if (!this.props.data.ableToRead) {
            text = "There is more to this story! To unlock further content please answer the above question correctly."
            blurClassName = "RSTBlurry";
        }
        return (
            <p
                className={ blurClassName }
            >
                { text }
            </p>
        );
    }
}

ReadStoryText.propTypes = {
    data: PropTypes.shape({
        ableToRead: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    })
};

export default ReadStoryText;
