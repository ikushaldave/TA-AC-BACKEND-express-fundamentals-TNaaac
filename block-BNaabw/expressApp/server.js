const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware

app.use(logger("dev"));

app.use(express.json());

app.use(express.urlencoded());

app.use(cookieParser());

app.use((req, res, next) => {
	let count = req.cookies.count;
	if (count) {
		res.cookie("count", +count + 1);
	} else {
		res.cookie("count", 1);
	}
	next();
});

app.use(express.static(__dirname + "/public"));

// Routing

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/venue", (req, res) => {
	res.sendFile(__dirname + "/venue.html");
});

app.get("/speakers", (req, res) => {
	res.sendFile(__dirname + "/speakers.html");
});

app.get("/schedule", (req, res) => {
	res.sendFile(__dirname + "/schedule.html");
});

app.get("/register", (req, res) => {
	res.sendFile(__dirname + "/register.html");
});

// Error Handline

app.use((req, res, next) => {
	res.status(400).send("<h1>Page Not Found</h1>");
});

app.use((err, req, res, next) => {
	res.status(500).send("Something Went Wrong");
});

// Listening

app.listen(4000, () => {
	console.log("Server Listen on PORT 4000");
});
