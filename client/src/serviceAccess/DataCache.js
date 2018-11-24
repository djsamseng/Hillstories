import picnicImg from "../img/37654668_10157550130863572_8372413357658996736_o.jpg";
import trophyImg from "../img/45415073_10217454255853498_3639148136615641088_o.jpg";

import Constants from "../constants.js"

class DataCache {
    constructor() {
        this.d_stories = {};
        this.d_storyTiles = {};
        this.d_storyTileIdsToShow = [];
    }
    getStoryTiles() {
        return Promise.resolve([
            {
                authorId: "a1",
                authorName: "Sam",
                _id: "st1",
                imageUrl: picnicImg,
                snippet: "Third time's a charm. Food. Dancing. Volleyball. Good looking people.",
                storyId: "story1",
                title: "Work Picnic",
            },
            {
                authorId: "a2",
                authorName: "Chantal",
                _id: "st2",
                imageUrl: trophyImg,
                snippet: "CHANTAL WON! and we celebrated afterward at BBC. Funny Boston Burger Company and Built By Chantal both share BBC",
                storyId: "story2",
                title: "NPC New England Championships",
            }
        ]);
    }

    getStory({
        storyId
    }) {
        if (this.d_stories[storyId]) {
            return Promise.resolve(this.d_stories[storyId]);
        }
        return Promise.resolve()
        .then(() => {
            const oneWord = "a".repeat(10) + " ";
            const text = oneWord.repeat(200);

            let contents = [];
            contents = contents.concat((new Array(2)).fill(
                {
                    ableToRead: true,
                    type: Constants.CONTENT_TYPES.TEXT,
                    text,
                }
            ));
            contents = contents.concat((new Array(1)).fill(
                {
                    _id: "story1Question1",
                    ableToRead: true,
                    type: Constants.CONTENT_TYPES.QUESTION,
                    questionType: Constants.QUESTION_TYPES.MULTIPLE_CHOICE,
                    question: "Who came with me to the picnic?",
                    answerChoices: [
                        "Chantal",
                        "Mom",
                        "Grandma",
                        "Grandpa"
                    ],
                    answer: "Chantal",
                }
            ));

            contents = contents.concat((new Array(5)).fill(
                {
                    ableToRead: false,
                    type: Constants.CONTENT_TYPES.TEXT,
                    text,
                }
            ));

            const story = {
                authorId: "a1",
                authorName: "Sam",
                _id: "story1",
                content: "Blah blah blah",
                contents,
                imageUrl: picnicImg,
                title: "Work Picnic"
            }
            this.d_stories[storyId] = story;
            return story;
        });
    }

    handleQuestionAnswer({
        storyId,
        questionId,
        userAnswer,
    }) {
        return Promise.resolve()
        .then(() => {
            const story = this.d_stories[storyId];
            if (!story) {
                throw new Error("TODO: Not yet implemented");
            }
            let shouldUnlock = false;
            // Find what content to unlock
            // TODO: also go to server to unlock
            // TODO: go to server to track failed attempts
            const unlockBegin = story.contents.findIndex(content => {
                return content._id === questionId;
            });
            if (unlockBegin === -1) {
                throw new Error("Unable to find question with id:" + questionId);
            }
            if (story.contents[unlockBegin].answer !== userAnswer) {
                console.log("Wrong answer");
                return false;
            }
            console.log("Correct answer");
            const lockedContents = story.contents.slice(unlockBegin + 1);
            let unlockEnd = lockedContents.findIndex(content => {
                return content.type === Constants.CONTENT_TYPES.QUESTION;
            });
            if (unlockEnd === -1) {
                unlockEnd = story.contents.length;
            }
            else {
                unlockEnd += unlockBegin + 1;
            }
            const toUnlock = story.contents.slice(unlockBegin + 1,
                                                  unlockEnd);
            console.log("Unlocking:" + (unlockBegin + 1) +
                        " to:" + (unlockEnd) +
                        " of total:" + (story.contents.length));
            toUnlock.forEach(content => {
                content.ableToRead = true;
            });
        });
    }

    getStorySnippet({
        storyId
    }) {
        return Promise.resolve()
        .then(() => {
            return this.getStory({
                storyId
            })
        })
        .then(() => {
            if (!this.d_stories[storyId]) {
                throw new Error("No story for storyId: " + storyId);
            }
            const story = this.d_stories[storyId];
            return {
                storyId: story._id,
                snippetContent: story.content
            };
        });
    }
}

export default DataCache;


