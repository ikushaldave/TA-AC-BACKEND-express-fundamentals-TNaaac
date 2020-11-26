const express = require("express");

const app = express();

// Middleware

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public/"));

// Routing

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/json", (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.post("/contact", (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

app.listen(3000, () => {
	console.log("Server is running on PORT 3000");
});
