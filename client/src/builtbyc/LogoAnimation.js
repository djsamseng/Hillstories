import React, { Component } from "react"

import "./LogoAnimation.css"

class LogoAnimation extends Component {
    constructor(props) {
        super(props);
        const cTexts = [
            "C",
            "Class",
            "Character",
            "Confidence",
            "Courage",
            "Commitment",
            "Charm",
            "Competence",
            "Champions",
            "Can-do",
            "Cheer",
            "Credit",
            "Consistency",
            "Charisma",
            "Composure",
            "Cool",
            "Conviction",
            "Celebration",
            "Certainty",
            "Catching",
            "Chique",
            "Composure",
            "Caring",
            "Conquering",
            "Creativity",
            "Chantal",
        ];
        const currIndex = 0;
        this.state = {
            cTexts,
            currIndex
        };
        setInterval(() => {
            let newIndex = this.state.currIndex + 1;
            if (newIndex === this.state.cTexts.length) {
                newIndex = 0;
            }
            this.setState({
                currIndex: newIndex
            });
        }, 1500);
    }

    render() {
        const textFlips = this.state.cTexts.map((text, index) => {
            return {
                text,
                className: index === this.state.currIndex ?
                           "BBCLogoADTV" :
                           "BBCLogoADTH",
            };
        });
        const textFlipDivs = textFlips.map(flip => (
            <div
                className={ flip.className }
            >
                { flip.text }
            </div>
        ));
        return (
            <div
                className="BBCLogoAContainer"
            >
                <span
                    className="BBCLogoAStaticText"
                >
                    BuiltBy
                </span>
                <div
                    className="BBCLogoAAgg"
                >
                    { textFlipDivs }
                </div>
            </div>
        );
    }
}

export default LogoAnimation


