const express = require("express");
const { searchController } = require("../controllers");

const searchRouter = express.Router();

// * POST /search
searchRouter.post("/", searchController.search.post);

module.exports = searchRouter;
