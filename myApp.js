let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
    let absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
});

app.get("/json", (req,res) => {
    let message = "Hello json";
    console.log(process.env.MESSAGE_STYLE);

    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    res.json({"message": message});
});


































 module.exports = app;
