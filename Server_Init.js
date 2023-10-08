/*var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
const PORT = 8080
app.use(express.static('indexx.js'));
fs.readFile('./index.html', function(error, html){
  if (error) throw error;
  http.createServer(function (req, res) {
    res.write(html)
    res.end()
  }).listen(PORT)
});*/
const express = require("express")
const app = express()

const server = app.listen(8080, () => { // create a HTTP server on port 3000
    console.log(`Express running → PORT ${server.address().port}`)
});

app.use(express.static(__dirname, { // host the whole directory
        extensions: ["html", "js", "gif", "png"],
    }))

app.get("/", (req, res) => {
    return res.sendFile("./index.html")
})

app.get("*", (req, res) => {
    return res.sendStatus(404)
})
