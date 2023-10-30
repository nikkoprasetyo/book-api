"use strict";

const { hashPassword } = require("../helpers/bcrypt");
// /** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "nikko@mail.com",
          username: "nikkoprasetyo",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "ronaldo@mail.com",
          username: "ronaldo",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "lebronjames@mail.com",
          username: "lebronjames",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "kobebryant@mail.com",
          username: "kobebryant",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "eren@mail.com",
          username: "erenjaeger",
          password: hashPassword("123"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
