const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer(serverHandler)

function serverHandler (req, res) {
    
    // Middleware

    // For Handling incoming data in JSON or form

    let data = "";

    req.on("data", (chunk) => {
        data += chunk
    })
    
    req.on("end", () => {

        if (data) {
            
            if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
                req.body = qs.parse(data) || {}
            } else {
                req.body = JSON.parse(data) || {}
            }

            
        }

        // Handling Static Files

        fs.readFile(__dirname + "/public" + req.url, (err, content) => {

            if (err) {
                // if file doesn't exist check on one of route
                route(req, res)
                return;
            };

            let reqExt = req.url.split(".").pop()
            
            if (["jpg", "jpeg", "svg", "png", "webp"].includes(reqExt)) {
                res.writeHead(200, { "Content-Type": `image/${reqExt}` });
                fs.createReadStream(__dirname + "/public" + req.url).pipe(res);
            } else {
                res.writeHead(200, { "Content-Type": `text/css` });
                res.end(content.toString())
            }

        })
    })
}


// Route

function route (req, res) {
    if (req.method === "GET" && req.url === "/") {
        fs.readFile(__dirname + "/index.html", (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content.toString())
        })
    } else if (req.method === "GET" && req.url === "/venue") {
        fs.readFile(__dirname + "/venue.html", (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content.toString());
        });
    } else if (req.method === "GET" && req.url === "/register") {
        fs.readFile(__dirname + "/register.html", (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content.toString());
        });
    } else if (req.method === "GET" && req.url === "/speakers") {
        fs.readFile(__dirname + "/speakers.html", (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content.toString());
        });
    } else if (req.method === "GET" && req.url === "/schedule") {
        fs.readFile(__dirname + "/schedule.html", (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content.toString());
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end('<h1>Page Not Found</h1>');
    }
}

// Listener

server.listen(5000, () => {
    console.log('Server is Running on PORT 5000');
})