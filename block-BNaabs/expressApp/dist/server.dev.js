"use strict";

var express = require("express");

var app = express(); // MiddleWare

app.use(express.urlencoded()); // Routing

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/new", function (req, res) {
  res.sendFile(__dirname + "/new.html");
});
app.post("/new", function (req, res) {
  res.send(req.body);
});
app.get("/users/:id", function (req, res) {
  var id = req.params.id;
  res.send(id);
}); // Listening Server

app.listen(3000, function () {
  console.log("Server is running on PORT 3000");
});