const express = require("express");

const app = express();

// Middleware

app.use("/admin", (req, res, next) => {
	next("Unauthorize Access");
});

// Routes

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.get("/about", (req, res) => {
	res.send("About Page");
});

app.use((req, res, next) => {
	res.send("Page Not Found");
});

app.use((err, req, res, next) => {
	res.send(err);
});

// Listen Server

app.listen(3000, () => {
	console.log("Server is running on PORT 3000");
});
