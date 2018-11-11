import React, { Component } from "react";
import PropTypes from "prop-types";
import "./StorySnippetModal.css"

class StorySnippetModal extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(evt) {
        this.props.handleModalClose({
            isOpen: evt.target !== evt.currentTarget,
            storyId: this.props.storyId
        });
    }

    render() {
        return (
            <div
                id="storySnippetModal"
                className="storySnippetModal"
                onClick={ evt => { this.handleClick(evt); } }
            >
                <div
                    className="storySnippetModalContainer"
                >
                    Test
                    { this.props.data.snippetContext }
                </div>
            </div>
        );
    }
}

StorySnippetModal.propTypes = {
    data: PropTypes.shape({
        storyId: PropTypes.string.isRequired,
        snippetContent: PropTypes.string.isRequired,
    }),

    handleModalClose: PropTypes.func.isRequired,
};

export default StorySnippetModal;
