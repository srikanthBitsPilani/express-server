const express = require("express");
const http = require("http");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dishRouter = require("./routes/dishRouter");
const promoRouter = require("./routes/promoRouter");
const leaderRouter = require("./routes/leaderRouter");

const hostname = "localhost";
const port = "3000";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);
app.use("/dishes/:dishId", dishRouter);
app.use("/promotions/:promoId", promoRouter);
app.use("/leaders/:leaderId", leaderRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
