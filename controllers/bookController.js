const { Book, Favorite } = require("../models");

function getPagination(page, size) {
  page = page - 1;
  let limit = size ? +size : 5;
  let offset = page || page > 0 ? +page * limit : 0;

  return { limit, offset };
}

class BookController {
  static async getBooks(req, res, next) {
    let { page, size } = req.query;
    let pagination = getPagination(page, size);
    try {
      const { limit, offset } = pagination;
      const allBooks = await Book.findAndCountAll({
        limit,
        offset,
      });
      res.send(allBooks);
    } catch (error) {
      res.send(error);
    }
  }
  static async getFavorites(req, res, next) {
    let { page, size } = req.query;
    let pagination = getPagination(page, size);
    try {
      const { id } = req.params;
      const { limit, offset } = pagination;
      const findFavoriteBooks = await Favorite.findAndCountAll({
        limit,
        offset,
        where: {
          UserId: id,
        },
        include: Book,
      });
      res.send(findFavoriteBooks);
    } catch (error) {
      res.send(error);
    }
  }
  static async deleteFavorite(req, res, next) {
    try {
      const { id } = req.params;
      const deleteFavorite = await Favorite.destroy({ where: { id } });
      if (!deleteFavorite) {
        throw { name: "Error not found" };
      }
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = BookController;
