import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import BuiltByCLogo from "./BuiltByCLogo.png";
import LogoAnimation from "./LogoAnimation.js";
import "./BuiltByC.css";

class HomepageNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const logo = false ? (
            <img
                src={ BuiltByCLogo  }
                className="BBClogo"
            />
        ) : (
            <LogoAnimation/>
        );

        return (
            <nav
                className="topNavBar"
            >
                { logo }
                <ul
                >
                    <div
                        className="BBCbarsDropdown"
                    >
                        <a>
                        <FontAwesomeIcon
                            icon={ faBars }
                            size="2x"
                        />
                        </a>
                        <div className="BBCbarsDropdownContent"
                        >
                            <li>
                                <a href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/getstarted">
                                    Get Started
                                </a>
                            </li>
                        </div>
                    </div>
                </ul>
            </nav>
        );
    }
}

export default HomepageNavbar;

