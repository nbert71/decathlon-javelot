const path = require('path')

const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.use("/static", express.static(path.join(__dirname, '/static')))

// Redirection de /
app.get("/", (req, res) => {
    res.redirect(301, '/static/index.html')
})

//Gestion des 404
app.use(function (req, res) {
    console.log("404 URL not found : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("<html><head><meta charset='utf-8'><title>404</title></head><body><h1>Erreur 404.</h1><p>Ressource non trouvée</p></body></html>");

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);