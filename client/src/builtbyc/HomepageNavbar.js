import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import BuiltByCLogo from "./BuiltByCLogo.png";
import LogoAnimation from "./LogoAnimation.js";
import "./BuiltByC.css";

class HomepageNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false
        };
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
                className="BBCtopNavBarNav"
            >
                <a href="/">
                    <div
                        className="BBCtopNavBar"
                    >
                        { logo }
                    </div>
                </a>
                <div
                    className="BBCnavbarContentShow"
                >
                    <ul
                    >
                        <a href="/about">
                            <li>
                                About
                            </li>
                        </a>
                        <a href="/getstarted">
                            <li>
                                Get Started
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
        );
    }

    onBarsDropdownClick() {
        this.setState({
            showDropdown: !this.state.showDropdown
        });
    }
}

export default HomepageNavbar;

