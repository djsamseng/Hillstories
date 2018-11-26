import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

import * as EmailJS from "emailjs";

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.post("/bbcgetstarted", (req, res) => {
    console.log("GOT BBCgetstarted");
    const { state } = req.body;
    const {
        firstName,
        lastName,
        email
    } = state;
    const server = EmailJS.server.connect({
        user: "thebuiltbyc@gmail.com",
        password: "BuiltByChantal",
        host: "smtp.gmail.com",
        ssl: true
    });
    server.send({
        text: JSON.stringify(state),
        from: "BuiltByC Get Started",
        to: "BuiltByC <thebuiltbyc@gmail.com>",
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

app.use("/api", router);
app.listen(API_PORT, () => {
    console.log(`Listening on part ${API_PORT}`);
});
