import React, { Component } from "react"
import { Route } from "react-router";
import { fetch } from "whatwg-fetch";
import HomepageNavbar from "./HomepageNavbar.js"
import InstagramEmbed from "react-instagram-embed"
import "./BuiltByC.css";

import FaithWithoutActivity from "./img/FaithWithoutActivity.png";
import YouAreUnlimited from "./img/YouAreUnlimited.png";
import IfItDoesntChallenge from "./img/IfItDoesntChallenge.png";
import SuccessIsNeverOwned from "./img/SuccessIsNeverOwned.png";
import LiftPeopleUp from "./img/LiftPeopleUp.png";
import BeingTested from "./img/BeingTested.png";
import SteadinessComesFrom from "./img/SteadinessComesFrom.jpg";
import FastedCardio from "./img/FastedCardio.png";
import AskingAboutDrinking from "./img/AskingAboutDrinking.png";
import TodaysRefeed from "./img/TodaysRefeed.png";

class BBCHome extends Component {
   constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const links = [
            "https://www.instagram.com/p/Bqp3XRrBiYq/?utm_source=ig_web_copy_link",
            "https://www.instagram.com/p/BqdOeo8hLCh/?utm_source=ig_web_copy_link",
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
            <div>
                { instagramPosts }
            </div>
        );
    }
};

class BBCGetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        };
    }

    render() {
        const GISimpleEntries = [
            {
                id: "BBCGSfirstName",
                label: "First Name",
                type: "text",
                value: this.state.firstName,
            },
            {
                id: "BBCGSlastName",
                label: "Last Name",
                type: "text",
                value: this.state.lastName,
            },

            {
                id: "BBCGSemail",
                label: "Email",
                type: "email",
                value: this.state.email,
            },
            {
                id: "BBCGSphone",
                label: "Phone",
                type: "text",
                value: this.state.phone,
            },
            {
                id: "BBCGSsex",
                label: "Sex",
                type: "text",
                value: this.state.sex,
            },
            {
                id: "BBCGSheight",
                label: "Height",
                type: "text",
                value: this.state.height,
            },
            {
                id: "BBCGSweight",
                label: "Weight",
                type: "text",
                value: this.state.weight,
            },
            {
                id: "BBCGSdOB",
                label: "Date of birth",
                type: "text",
                value: this.state.dOB,
            },
            {
                id: "BBCGSoccupation",
                label: "Occupation",
                type: "text",
                value: this.state.occupation,
            },
        ].map(data => {
            return (
                <li>
                    <label
                        className="BBCShortEntryLabel">
                        { data.label }
                    </label>
                    <span className="BBCShortEntryValueContainer">
                        <input
                            className="BBCShortEntryValue"
                            id={ data.id }
                            type={ data.type }
                            value={ data.value }
                            onChange={ evt => this.handleChange(evt) }
                            required
                        >
                        </input>
                    </span>
                </li>
            );
        });
        const GILongEntries = [
            {
                id: "BBCGSbestTimeWorkOut",
                label: "Best time of day to work out",
                value: this.state.bestTimeWorkOut,
            },
            {
                id: "BBCGScurrNumWorkOut",
                label: "How many days a week are you currently working out?",
                value: this.state.currNumWorkOut,
            },
            {
                id: "BBCGSworkOutType",
                label: "How long are your typical work outs?" +
                       " What do your work outs consist of?" +
                       " (i.e. 30 minutes on the elliptical," +
                       " 30 minutes lifting weights)",
                value: this.state.workOutType,
            },
        ].map(data => {
            return (
                <li>
                    <label>
                        { data.label }
                        <br />
                        <textarea
                            id={ data.id }
                            value={ data.value }
                            onChange={ evt => this.handleChange(evt) }
                            required
                        >
                        </textarea>
                    </label>
                </li>
            );
        });
        const areasOfConcernLongEntries = [
            {
                id: "BBCGShealthConditions",
                label: "Diagnosed health conditions",
                value: this.state.healthConditions,
            },
            {
                id: "BBCGSreasonsNoWorkout",
                label: "Do you know of any reason you should not be participating in physical activity?",
                value: this.state.reasonsNoWorkout,
            },
            {
                id: "BBCGSinjuryHistory",
                label: "Please briefly list a history of any injuries or areas of concern",
                value: this.state.injuryHistory,
            },
        ].map(data => {
            return (
                <li>
                    <label>
                        { data.label }
                        <br />
                        <textarea
                            id={ data.id }
                            value={ data.value }
                            onChange={ evt => this.handleChange(evt) }
                        >
                        </textarea>
                    </label>
                </li>
            );
        });

        const settingGoalsLongEntries = [
            {
                id: "BBCGSgoalDaysPerWeek",
                label: "How many days a week would you like to be working out?",
                value: this.state.goalDaysPerWeek,
            },
            {
                id: "BBCGSgoalPhysicalChanges",
                label: "What physical changes would you like to see in your body?",
                value: this.state.goalPhysicalChanges,
            },
            {
                id: "BBCGSgoalLifeImprovements",
                label: "What other areas of your life, if any, do you hope to improve through training? (i.e. stress reduction, mental clarity, improved interpersonal relationships et.c)",
                value: this.state.goalLifeImprovements,
            },
        ].map(data => {
            return (
                <li>
                    <label>
                        { data.label }
                        <br />
                        <textarea
                            id={ data.id }
                            value={ data.value }
                            onChange={ evt => this.handleChange(evt) }
                        >
                        </textarea>
                    </label>
                </li>
            );
        });

        return (
            <div
                className="BBCGetStartedContainer"
            >
                { !this.state.submitted ? (
                    <form
                        onSubmit={ evt => this.handleSubmit(evt) }
                    >
                        <ul>
                            <h3>General Information</h3>
                            <div className="BBCShortEntryContainer">
                                { GISimpleEntries }
                            </div>
                            <br />
                            { GILongEntries }
                            <h3>Areas Of Concern And Injury History</h3>
                            { areasOfConcernLongEntries }
                            <h3>Setting Your Health And Fitness Goals</h3>
                            { settingGoalsLongEntries }
                            <input
                                type="submit"
                                value="submit"
                            >
                            </input>
                        </ul>
                    </form>
                ) : (
                    !this.state.didError ? (
                        <h3>Submitted! We'll be in touch shortly</h3>
                    ) : (
                        <h3>Unexpected error. Please email thebuiltbyc@gmail.com</h3>)
                ) }
            </div>
        );
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const state = this.state;
        console.log(state);
        fetch("/api/bbcgetstarted", {
            method: "POST",
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify({
                state
            }),
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if (!res.success) {
                console.error("Error submitting get started");
                console.error(res.error.message || res.error);
                this.setState({
                    didError: true
                });
            }
            console.log("Success submitting get started");
            this.setState({
                submitted: true
            });
        });
    }

    handleChange(evt) {
        const elemId = evt.target.id;
        const stateVarName = elemId.substr(5);
        this.setState({
            [stateVarName]: evt.target.value
        });
    }
}

class BBCAbout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const images = [
            FaithWithoutActivity,
            YouAreUnlimited,
            IfItDoesntChallenge,
            SuccessIsNeverOwned,
            LiftPeopleUp,
            BeingTested,
            SteadinessComesFrom,
            FastedCardio,
            AskingAboutDrinking,
            TodaysRefeed,
        ].map(imgObj => {
            return (
                <div
                    className="BBCaboutImageContainer"
                >
                    <img
                        className="BBCAboutImage"
                        src={ imgObj }
                    >
                    </img>
                </div>
            );
        });
        return (
            <div
                className="BBCaboutContainer"
            >
                { images }
            </div>
        );
    }
};

class BuiltByC extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                className="container">
                <HomepageNavbar />
                <div className="storyTileListContainer">
                    <Route
                        exact path="/"
                        component={ BBCHome }
                    >
                    </Route>
                    <Route
                        exact path="/getstarted"
                        component={ BBCGetStarted }
                    >
                    </Route>
                    <Route
                        exact path="/about"
                        component={ BBCAbout }
                    >
                    </Route>
                </div>
            </div>
        );
    }
}

export default BuiltByC
