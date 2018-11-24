import React, { Component } from "react";
import PropTypes from "prop-types";
import Constants from "../constants";

class ReadStoryQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let html = [];
        html.push((
            <h3>{ this.props.data.question }</h3>
        ));
        if (this.props.data.questionType === Constants.QUESTION_TYPES.MULTIPLE_CHOICE) {
            html.push(this.renderMultipleChoice());
        }
        return html;
    }

    renderMultipleChoice() {
        const radioInputs = this.props.data.answerChoices.map(choice => {
            return (
                <div>
                    <input
                        type="radio"
                        name="group1"
                        value={ choice }
                    />
                    { choice }
                </div>
            );
        });
        return (
            <form
                onSubmit={ evt => this.handleSubmit(evt) }>
                <div onChange={ evt => this.handleRadioChange(evt) }>
                    { radioInputs }
                </div>
                <input
                    type="submit"
                    value="submit"
                />
            </form>
        );
    }

    handleRadioChange(evt) {
        this.state.currentRadioSelected = evt.target.value;
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.handleQuestionAnswer({
            questionId: this.props.data._id,
            userAnswer: this.state.currentRadioSelected
        });
    }
}

ReadStoryQuestion.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        questionType: PropTypes.string.isRequired,
        answerChoices: PropTypes.arrayOf(PropTypes.string),
    }),

    handleQuestionAnswer: PropTypes.func.isRequired,
};

export default ReadStoryQuestion;
