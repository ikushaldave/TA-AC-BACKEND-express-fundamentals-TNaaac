const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware

app.use(logger("dev"));

app.use(cookieParser());

app.use("/cookie", (req, res, next) => {
	let count = req.cookies.count;

	if (count) {
		res.cookie("count", ++count);
	} else {
		res.cookie("count", 1);
	}

	res.send(`${count} Times Visited`);

	next();
});

app.use(express.urlencoded());

app.use(express.json());

// Routes

app.get("/", (req, res) => {
	res.send("<h2> Welcome to Express</h2>");
});

app.get("/about", (req, res) => {
	res.send("My name is qwerty");
});

app.post("/form", (req, res) => {
	res.json(req.body);
});

app.post("/json", (req, res) => {
	res.contentType("text").send(req.body);
});

app.get("/users/:username", (req, res) => {
	const username = req.params.username;
	res.send(`<h2>${username}</h2>`);
});

// Error Handling

app.use((req, res, next) => {
	res.send("<h2>Page Not Found</h2>");
});

app.use((err, req, res, next) => {
	res.status(500).send("Server Error");
});

// Listening

app.listen(3000, () => {
	console.log("Server Running on PORT 3000");
});
