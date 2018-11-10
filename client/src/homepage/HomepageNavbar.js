import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./HomepageNavbar.css"

class HomepageNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav
                className="topNavBar"
            >
                <ul
                >
                    <li
                        className="faBars"
                    >
                        <FontAwesomeIcon
                            icon={ faBars }
                            size="2x"
                        />
                    </li>
                    <li
                        className="faUserCircle"
                    >
                        <a>
                        <FontAwesomeIcon
                            icon={ faUserCircle }
                            size="2x"
                        />
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default HomepageNavbar;

