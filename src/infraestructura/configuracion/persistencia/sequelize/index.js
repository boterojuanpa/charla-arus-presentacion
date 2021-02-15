/* eslint-disable global-require */
/* eslint-disable arrow-body-style */

const { Sequelize } = require('sequelize');
const cls = require('cls-hooked');
const modeloCelda = require('./modelos/modelo-celda');

const namespace = cls.createNamespace('namespace-sequelize');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql'
});

modeloCelda(sequelize);

sequelize.sync();

module.exports = sequelize;
