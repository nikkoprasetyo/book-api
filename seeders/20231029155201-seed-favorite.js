"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Favorites",
      [
        {
          UserId: 1,
          BookId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 1,
          BookId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 2,
          BookId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 2,
          BookId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 5,
          BookId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Favorites", null, {});
  },
};
