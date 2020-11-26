"use strict";

var fs = require("fs");

var qs = require("querystring");

var express = require("express");

var app = express(); // Middleware
// logger

app.use(function (req, res, next) {
  console.log(req.method, req.url, new Date());
  next();
}); // express.json()

app.use(function (req, res, next) {
  var data = "";
  req.on("data", function (chunk) {
    data += chunk;
  });
  req.on("end", function () {
    if (req.method === "POST" && req.headers["content-type"] === "application/json") {
      console.log(data);
      req.body = JSON.parse(data) || {};
      console.log(req.body);
      next();
    }
  });
  next();
}); // express.urlencoded()

app.use(function (req, res, next) {
  var data = "";
  req.on("data", function (chunk) {
    data += chunk;
  });
  req.on("end", function () {
    if (req.method === "POST" && req.headers["content-type"] === "application/x-www-form-urlencoded") {
      req.body = qs.parse(data) || {};
      console.log(req.body);
      next();
    }
  });
  next();
}); // express.static(absolute path)

app.use(function (req, res, next) {
  fs.readFile(__dirname + "/public" + req.path, function (err, content) {
    if (err) return next();
    res.sendFile(__dirname + "/public" + req.path);
  });
}); // Routing

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.use(function (req, res, next) {
  res.status(400).send("<h2>Page Not Found</h2>");
}); // listen

app.listen(5000, function () {
  console.log("Server is running on PORT 5000");
});