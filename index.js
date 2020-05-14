const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const hostname = "localhost";
const port = "3000";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/dishes", (req, res, next) => {
  res.end("We will send you all Dishes");
});

app.post("/dishes", (req, res, next) => {
  res.end(
    "We will post the dish:" +
      req.body.name +
      "discription:" +
      req.body.description
  );
});

app.put("/dishes", (req, res, next) => {
  res.statusCode = 403;
  res.end("The method put is not supported");
});

app.delete("/dishes", (req, res, next) => {
  res.end("We will delete the dishes");
});

app.get("/dishes:dishId", (req, res, next) => {
  res.end("We will send you all Dish with id:" + req.params.dishId);
});

app.post("/dishes:dishId", (req, res, next) => {
  res.statusCode = 403;
  res.end("Post method is not supported");
});

app.put("/dishes:dishId", (req, res, next) => {
  res.end(
    "We will update the dish " +
      req.params.dishId +
      "as" +
      req.body.name +
      " " +
      req.body.description
  );
});

app.delete("/dishes:dishId", (req, res, next) => {
  res.end("We will delete the dish:" + req.params.dishId);
});

app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end("<html><body><h1>Hello World</h1></body></html>");
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
