// Posts
const POSTS = "/posts";
const POST_DETAIL = "/:id";

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
  search: SEARCH
};

module.exports = routes;
