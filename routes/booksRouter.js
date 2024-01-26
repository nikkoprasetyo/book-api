const router = require("express").Router();
const BookController = require("../controllers/bookController");

router.get("/", BookController.getBooks);
router.get("/favorites/:id", BookController.getFavorites);
router.delete("/favorites/:id", BookController.deleteFavorite);

module.exports = router;
