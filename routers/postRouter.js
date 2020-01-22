const express = require("express");
const routes = require("../routes");

const { postController } = require("../controllers");
const { postcommentController } = require("../controllers");

const postRouter = express.Router();

const postcommentRouter = express.Router();

// * GET /posts
postRouter.get("/", postController.posts.get);
// * POST /posts
postRouter.post("/", postController.posts.post);
// * GET /posts/:id
postRouter.get(routes.postDetail, postController.postdetail.get);
// * PUT /posts/:id
postRouter.put(routes.postDetail, postController.postdetail.put);
// * DELETE /posts/:id
postRouter.delete(routes.postDetail, postController.postdetail.delete);

// *GET /posts/comments/id
postcommentRouter.get(
  `${routes.comments}${routes.commentDetail}`,
  postcommentController.postcommentdetail.get
);

module.exports = postRouter;
module.exports = postcommentRouter;
