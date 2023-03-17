let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    let absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
});



































 module.exports = app;
