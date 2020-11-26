const express = require("express");

const app = express();

// MiddleWare

app.use(express.urlencoded());

// Routing

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/new", (req, res) => {
	res.sendFile(__dirname + "/new.html");
});

app.post("/new", (req, res) => {
	res.send(req.body);
});

app.get("/users/:id", (req, res) => {
	const id = req.params.id;
	res.send(id);
});

// Listening Server

app.listen(3000, () => {
	console.log("Server is running on PORT 3000");
});
