"use strict";

const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          fullName: "J. K. Rowling",
          username: "rowling",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "R L Stine",
          username: "stine",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Harper Lee",
          username: "harper",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Scott Fitzgerald",
          username: "scott",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Charles Dickens",
          username: "charles",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
