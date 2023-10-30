"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Nikko's Life Story",
          AuthorId: 1,
          publishedYear: "2023",
          genre: "Non-Fiction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Nikko's Adventure: Life After College",
          AuthorId: 1,
          publishedYear: "2021",
          genre: "Non-Fiction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Harry Potter and the Philosopher's Stone",
          AuthorId: 1,
          publishedYear: "1997",
          genre: "Fiction",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Haunted Mask",
          AuthorId: 2,
          publishedYear: "1993",
          genre: "Horror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "It Came from Beneath the Sink!",
          AuthorId: 2,
          publishedYear: "1995",
          genre: "Horror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "To Kill a Mockingbird",
          AuthorId: 3,
          publishedYear: "1960",
          genre: "Thriller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Great Gatsby",
          AuthorId: 4,
          publishedYear: "1925",
          genre: "Thriller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Great Expectations",
          AuthorId: 5,
          publishedYear: "1861",
          genre: "Novel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
