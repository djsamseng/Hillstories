import React, { Component } from "react"
import HomepageNavbar from "./HomepageNavbar.js"
import InstagramEmbed from "react-instagram-embed"

class BuiltByC extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const links = [
            "https://www.instagram.com/p/BqSGYO0hePh/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/BqKr3YehZg8/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/BqDjggGhutT/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/Bp-EuR8hVML/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/BpxmmwxBU2h/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/BpMycfpHCnk/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/BntzkzFHBUF/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/BPXzIPVB5vF/?utm_source=ig_web_copy_link",
        ];
        const instagramPosts = links.map(link => (
                <InstagramEmbed
                    url={ link }
                />
        ));
        return (
            <div
                className="container">
                <HomepageNavbar />
                <div className="storyTileListContainer">
                    { instagramPosts }
                </div>
            </div>
        );
    }
}

export default BuiltByC
