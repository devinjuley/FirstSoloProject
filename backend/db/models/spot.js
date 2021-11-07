'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    title: DataTypes.STRING,
    details: DataTypes.STRING,
    aboutThisPlace: DataTypes.TEXT
  }, {});
  Spot.associate = function (models) {
    Spot.hasMany(models.Image, { foreignKey: 'spotId' })
    Spot.hasMany(models.Review, { foreignKey: 'spotId' })
    Spot.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Spot;
};