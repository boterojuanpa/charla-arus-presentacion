/* eslint-disable arrow-body-style */
const express = require('express');
const bodyParser = require('body-parser');
const gestorDependencias = require('./infraestructura/configuracion/dependencias/gestor-dependencias');
const ManejadorError = require('./infraestructura/configuracion/errores/manejador-error');
const enrutadorApi = require('./infraestructura/configuracion/rutas');
const logger = require('./infraestructura/configuracion/errores/winston');

const app = express();
const port = process.env.PORT || 3000;

gestorDependencias.ServicioDePersistencia.iniciarBaseDeDatos().then(() => {

    app.use(bodyParser.json());

    app.use('/api', enrutadorApi(gestorDependencias));

    app.use(ManejadorError);

    app.listen(port, () => console.log(`http://localhost:${port}`));

}, (err) => {
    logger.error(`la base de datos contiene errores, err:${err}`, err);
});

module.exports = app;
