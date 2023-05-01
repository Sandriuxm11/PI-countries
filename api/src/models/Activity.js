const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dificultad: {
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    },
    duracion:{
        type: DataTypes.STRING,
    },
    temporada:{
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
    }
  },{
    timestamps: false,
  });
};