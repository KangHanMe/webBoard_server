// Posts
const POSTS = "/posts";
const POST_DETAIL = "/:id";
const POST_COMMENTS = "/comments/:id";

// Comments
const COMMENTS = "/comments";
const COMMENT_DETAIL = "/:id";

// Search
const SEARCH = "/search";

const routes = {
  posts: POSTS,
  postDetail: POST_DETAIL,
  comments: COMMENTS,
  commentDetail: COMMENT_DETAIL,
  search: SEARCH,
  postComments: POST_COMMENTS
};

module.exports = routes;
