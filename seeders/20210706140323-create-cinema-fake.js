'use strict';

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
    await queryInterface.bulkInsert('Cinemas', [
      {
        id: 1,
        name: "BHD truong chinh",
        address: "275 truong chinh",
        image: "BHDtruongchinh.jpg",
        cineplexId: 1,// BHD===1
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50"

      },
      {
        id: 2,
        name: "DDC truong chinh",
        address: "275 truong chinh",
        image: "DDCtruongchinh.jpg",
        cineplexId: 2,// BHD===1
        createdAt: "2021-07-06 21:08:50",
        updatedAt: "2021-07-06 21:08:50"

      },


    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cinemas', null, {});
  }
};
