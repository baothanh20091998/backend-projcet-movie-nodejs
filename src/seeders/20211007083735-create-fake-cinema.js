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
      "cinemas",
      [
        {
          id: "1",
          name: "CGV Bình Tân",
          address: "222 Bình Tân",
          image: "image CGV Bình Tân",
          cineplexid: "1",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "2",
          name: "CGV Tân Phú",
          address: "222 Tân Phú",
          image: "image CGV Tân Phú",
          cineplexid: "1",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "3",
          name: "CGV Gò Vấp",
          address: "222 Gò Vấp",
          image: "image CGV Gò Vấp",
          cineplexid: "1",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "4",
          name: "GLX Quận 1",
          address: "222 Quận 1",
          image: "image GLX Quận 1",
          cineplexid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "5",
          name: "GLX Phú Nhuận",
          address: "222 Phú Nhuận",
          image: "image GLX Phú Nhuận",
          cineplexid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "6",
          name: "GLX Kinh Dương Vương",
          address: "222 Kinh Dương Vương",
          image: "image GLX Kinh Dương Vương",
          cineplexid: "2",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "7",
          name: "BHD Thủ Đức",
          address: "222 Thủ Đức",
          image: "image BHD Thủ Đức",
          cineplexid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
        },
        {
          id: "8",
          name: "BHD Cao Thắng",
          address: "222 Cao Thắng",
          image: "image BHD Cao Thắng",
          cineplexid: "3",
          createdAt: "2021-08-25 10:00:10",
          updatedAt: "2021-08-25 10:00:10",
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
    await queryInterface.bulkDelete("cinemas", null, {});
  },
};
