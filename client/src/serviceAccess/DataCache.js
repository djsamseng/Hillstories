import picnicImg from "../img/37654668_10157550130863572_8372413357658996736_o.jpg";
import trophyImg from "../img/45415073_10217454255853498_3639148136615641088_o.jpg";

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
            const CONTENT_TYPES = {
                QUESTION: "QUESTION",
                TEXT: "TEXT",
            };
            const oneWord = "a".repeat(10) + " ";
            const text = oneWord.repeat(500);

            let contents = [];
            contents = contents.concat((new Array(5)).fill(
                {
                    ableToRead: true,
                    type: CONTENT_TYPES.TEXT,
                    text,
                }
            ));
            contents = contents.concat((new Array(5)).fill(
                {
                    ableToRead: true,
                    type: CONTENT_TYPES.QUESTION,
                    text,
                }
            ));

            contents = contents.concat((new Array(5)).fill(
                {
                    ableToRead: false,
                    type: CONTENT_TYPES.TEXT,
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


