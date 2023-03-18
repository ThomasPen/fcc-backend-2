let express = require('express');
let app = express();
let dotenv = require('dotenv').config();

app.use("/public", express.static(__dirname + "/public"));
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
})

app.get("/", (req, res) => {
    let absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
});

app.get("/json", (req,res) => {
    let message = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    res.json({"message": message});
});


































 module.exports = app;
