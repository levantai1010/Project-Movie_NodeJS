'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Cineplex }) {
      // define association here
      this.belongsTo(Cineplex, {
        foreignKey: "cineplexId",
      });
    }
  };
  Cinema.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    cineplexId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cinema',
  });
  return Cinema;
};