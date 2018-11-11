import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import BuiltByCLogo from "./BuiltByCLogo.png";
import "./BuiltByC.css";

class HomepageNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav
                className="topNavBar"
            >
<img
                            src={ BuiltByCLogo  }
                            className="BBClogo"
                        />

                <ul
                >
                    <li
                        className="faUserCircle"
                    >
                        <a>
                        <FontAwesomeIcon
                            icon={ faBars }
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

