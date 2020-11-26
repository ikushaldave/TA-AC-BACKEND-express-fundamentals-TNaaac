const fs = require("fs");
const qs = require("querystring");
const express = require("express");

const app = express();

// Middleware

// logger
app.use((req, res, next) => {
	console.log(req.method, req.url, new Date());
	next();
});

// express.json()
app.use((req, res, next) => {
	let data = "";
	req.on("data", (chunk) => {
		data += chunk;
	});

	req.on("end", () => {
		if (req.method === "POST" && req.headers["content-type"] === "application/json") {
			console.log(data);
			req.body = JSON.parse(data) || {};
			console.log(req.body);
			next();
		}
	});

	next();
});

// express.urlencoded()

app.use((req, res, next) => {
	let data = "";
	req.on("data", (chunk) => {
		data += chunk;
	});

	req.on("end", () => {
		if (req.method === "POST" && req.headers["content-type"] === "application/x-www-form-urlencoded") {
			req.body = qs.parse(data) || {};
			console.log(req.body);
			next();
		}
	});

	next();
});

// express.static(absolute path)

app.use((req, res, next) => {
	fs.readFile(__dirname + "/public" + req.path, (err, content) => {
		if (err) return next();
		res.sendFile(__dirname + "/public" + req.path);
	});
});

// Routing

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.use((req, res, next) => {
	res.status(400).send("<h2>Page Not Found</h2>");
});
// listen

app.listen(5000, () => {
	console.log("Server is running on PORT 5000");
});
