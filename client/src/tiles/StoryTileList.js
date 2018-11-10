import React, { Component } from "react";
import PropTypes from "prop-types";
import StoryTile from "./StoryTile";

class StoryTileList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const storyTiles = this.props.storyTiles.map(storyTile => (
            <StoryTile
                data={ storyTile }
                handleOpen={ args => {
                    this.props.handleOpen(args);
                }}
                handleOpenProfile={ args => {
                    this.props.handleOpenProfile(args);
                }}
                key={ storyTile._id }
            />
        ));
        return (
            <div
                className="storyTileListContainer"
            >
                { storyTiles }
            </div>
        );
    }
}

StoryTileList.propTypes = {
    storyTiles: PropTypes.arrayOf(
        StoryTile.propTypes.data
    ),

    // Handlers
};

export default StoryTileList;
