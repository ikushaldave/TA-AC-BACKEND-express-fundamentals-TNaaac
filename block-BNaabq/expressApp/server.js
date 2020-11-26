const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware

app.use(logger("dev"));

app.use(cookieParser());

app.use("/about", (req, res, next) => {
	res.cookie("username", "Kushal");
	next();
});

app.use("/about", (req, res, next) => {
	res.send(req.cookies);
});

// Routes

app.get("/", (req, res) => {
	res.send("Working");
});

app.listen(3000, () => {
	console.log("Server is Running on Port 3000");
});
