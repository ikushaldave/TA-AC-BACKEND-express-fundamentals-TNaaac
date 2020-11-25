const express = require("express");

const app = express();

function logger(req, res, next) {
	console.log(req.method, req.url);
	next();
}

app.use(logger);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(4000, () => {
	console.log("Server Running on PORT 4000");
});
