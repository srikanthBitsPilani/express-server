const express = require("express");
const http = require("http");

const hostname = "localhost";
const port = "3000";

const app = express();

app.use((req, res, next) => {
  console.log(req.header);
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("<html><body><h1>Hello World</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
