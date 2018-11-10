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
                handleOpen={ () => this.props.handleOpen(storyTile._id) }
                key={ storyTile._id }
            />
        ));
        return (
            <div>
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
