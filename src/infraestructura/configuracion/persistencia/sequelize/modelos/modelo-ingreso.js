const { DataTypes } = require('sequelize');

// eslint-disable-next-line arrow-body-style
module.exports = (sequelize, celda) => sequelize.define('ingreso', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    placa: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    fechaIngreso: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    celdaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: celda,
            key: 'id'
        }
    }
}, {
    timestamps: false
});
