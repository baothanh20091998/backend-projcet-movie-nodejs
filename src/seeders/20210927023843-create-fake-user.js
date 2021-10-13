"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "1",
          name: "Bao Thanh",
          role: "ADMIN",
          email: "abc@gmail.com",
          password: "123456789",
          phone: "0909885523",
          avatar: "avatar.png",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "2",
          name: "Thuy Ha",
          role: "ADMIN",
          email: "timco@gmail.com",
          password: "123456789",
          phone: "0909885523",
          avatar: "avatar.png",
          createdAt: "2021-08-26 06:30:10",
          updatedAt: "2021-08-26 06:30:10",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
