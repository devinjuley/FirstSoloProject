'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Reviews', [
      {
        review: 'Lacy is a great host! She gives a proper and thorough orientation to the building and the condo! She shows you how to access the “other” building, and I’m so glad she did! One day the elevator was closed to the garage for “moving” and I had to enter the other building to get into the garage to get my car. I wouldn’t have known what to do if Lacy hadn’t shown me that other buildings access to the garage (there is no on sight office here as it’s not an apartment complex). The place was white glove clean! I love the decor! Lacy was quick to respond to any communication efforts. I would love to stay here again!',
        userId: 21,
        spotId: 1,
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
