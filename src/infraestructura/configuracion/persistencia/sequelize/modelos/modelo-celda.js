const { DataTypes } = require('sequelize');

// eslint-disable-next-line arrow-body-style
module.exports = (sequelize) => sequelize.define('celda', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    tipo: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    numeroCelda: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false
});
