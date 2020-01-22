const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();

const routes = require("./routes");
const postRouter = require("./routers/postRouter");
const commentRouter = require("./routers/commentRouter");
const searchRouter = require("./routers/searchRouter");

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

// router
app.use(routes.posts, postRouter);
app.use(routes.comments, commentRouter);
app.use(routes.search, searchRouter);

app.listen(PORT, () =>
  console.log(`Web-board server is listening on port ${PORT}!`)
);
