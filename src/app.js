const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));


let server = app.listen(9999, () => {
    console.log('Server started!');
});

app.route('/').get((req, res) => {
    res.sendFile("./src/index.html", { root: "." });
});

app.route("/save").post(function(req, res) {
    res.send("saved");
    console.log(req.body);
});