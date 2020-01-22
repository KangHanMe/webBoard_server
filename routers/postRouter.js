const express = require("express");
const routes = require("../routes");
const { postController } = require("../controllers");

const postRouter = express.Router();

// * GET /posts
postRouter.get("/", postController.posts.get);
// * POST /posts
postRouter.post("/", postController.posts.post);
// * GET /posts/:id
postRouter.get(routes.postDetail, postController.postdetail.get);
// * POST /posts/:id
postRouter.post(routes.postDetail, postController.postdetail.post);
// * PUT /posts/:id
postRouter.put(routes.postDetail, postController.postdetail.put);
// * DELETE /posts/:id
postRouter.delete(routes.postDetail, postController.postdetail.delete);

module.exports = postRouter;
