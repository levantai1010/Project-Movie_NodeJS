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
    Example:
    await queryInterface.bulkInsert('Cineplexes',
      [
        {
          id: 1,
          name: "BHD",
          logo: "qwertyuiop.jpg",
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50"
        },
        {
          id: 2,
          name: "DDC",
          logo: "qwertyuiop.jpg",
          createdAt: "2021-07-06 21:08:50",
          updatedAt: "2021-07-06 21:08:50"
        },
        // for (let i = 0; i < 10; i++) {
        //   {
        //         id: i+1,
        //         name: "BHD",
        //         logo: "qwertyuiop.jpg",
        //         createdAt: "2021-07-06 21:08:50",
        //         updatedAt: "2021-07-06 21:08:50"
        //       }

        // }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cineplexes', null, {})
  }
};
