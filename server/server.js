import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import passwords from "./pwd.js";
import instagram from "instagram-node";

import * as EmailJS from "emailjs";

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

const ig = instagram.instagram();

ig.use({
    client_id: passwords.instagram.client_id,
    client_secret: passwords.instagram.client_secret,
});

router.post("/bbcgetstarted", (req, res) => {
    console.log("GOT BBCgetstarted");
    const { state } = req.body;
    const {
        firstName,
        lastName,
        email
    } = state;
    const server = EmailJS.server.connect({
        user: "builtbycs@gmail.com",
        password: passwords.gmail,
        host: "smtp.gmail.com",
        ssl: true
    });
    server.send({
        text: JSON.stringify(state),
        from: "BuiltByC Get Started",
        to: "BuiltByC <builtbycs@gmail.com>",
        cc: "",
        subject: "Get Started: " + state.firstName + " " + state.lastName + " " + state.email,
    }, (error, msg) => {
        if (error) {
            console.error("Error sending email");
            console.error(error);
            return res.json({
                success: false,
                error
            });
        }
        else {
            console.info("Success sending email");
            console.info(msg);
            return res.json({
                success:true
            });
        }
    });
});

router.post("/bbcabout", (req, res) => {
    console.log("GOT bbcabout");
    ig.use({
        access_token: passwords.instagram.access_token,
    });

    ig.user_self_media_recent(
        {},
        (error, result, pagination, remaining, limit) => {
            if (error) {
                console.log("ERROR:", error);
                return res.json({
                    error: error,
                    links: []
                });
            }
            else {
                const links = result.map(res => res.link);
                console.log("LINKS:", links);
                return res.json({
                    links
                });
            }
        }
    );
});

app.use("/api", router);
app.listen(API_PORT, () => {
    console.log(`Listening on part ${API_PORT}`);
});
