const path = require('path')

const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get("/", (req, res) => {
    res.redirect(301, '/static/index.html')
})

app.use(function (req, res) {
    console.log("URL not found : " + req.url);

    res.statusCode = 404;
    res.redirect("./404.html")
})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);