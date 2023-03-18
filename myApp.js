let express = require('express');
let app = express();
let dotenv = require('dotenv').config();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    next();
})
app.use("/public", express.static(__dirname + "/public"));
app.get('/now',
(req,res,next) => {
    req.time = new Date().toString();
    next();
}, 
(req,res) => {
    res.json({time: req.time});
});

app.get("/:word/echo", (req,res) => {
    res.json({echo: req.params.word});
});

app.get("/name", (req,res) => {
    res.json({"name": req.query.first + " " + req.query.last});
}).post("/name", (req,res) => {
    res.json({"name": req.query.first + " " + req.query.last});
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
