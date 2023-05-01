const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('country', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.NUMBER,
    },
    poblacion: {
      type: DataTypes.INTEGER,
    },
    created:{
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{
    timestamps: false,
  });
};
