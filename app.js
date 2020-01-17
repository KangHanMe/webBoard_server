const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");
const postRouter = require("./routers/postRouter");

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(morgan("dev"));

app.use(routes.posts, postRouter);

app.listen(PORT, () =>
  console.log(`Web-board server is listening on port ${PORT}!`)
);
