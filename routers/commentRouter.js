const express = require("express");
const routes = require("../routes");
const { commentController } = require("../controllers");

const commentRouter = express.Router();

// * POST /comments
commentRouter.post("/", commentController.comments.post);
// * DELETE /comments/:id
commentRouter.delete(
  routes.commentDetail,
  commentController.commentdetail.delete
);

module.exports = commentRouter;
