const router = require("express").Router();
const usersRouter = require("./usersRouter");
const bookRouter = require("./booksRouter");

router.use("/users", usersRouter);

router.use("/books", bookRouter);

module.exports = router;
