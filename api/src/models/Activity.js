const { INTEGER } = require('sequelize');
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
    },
    dificultad: {
        type: DataTypes.RANGE(INTEGER, 1,5),
        allowNull: false,
    },
    duracion:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    temporada:{
        type: DataTypes.STRING,
        defaultValue: {Verano : "verano", Otoño: "otoño", Invierno: "invierno", Primavera: "primavera"}
    }
  },{
    timestamps: false,
  });
};