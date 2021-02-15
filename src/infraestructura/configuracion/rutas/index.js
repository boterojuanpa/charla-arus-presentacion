const express = require('express');
const swaggerUi = require('swagger-ui-express');
const rutasCelda = require('../../celdas/rutas/rutas-celdas');
const swaggerDocument = require('../swagger/swagger.json');

const enrutadorApi = (gestorDeDependencias) => {
    const enrutadorExpress = express.Router();

    const enrutadorCelda = rutasCelda(gestorDeDependencias);

    enrutadorExpress.use('/celda', enrutadorCelda);

    enrutadorExpress.use('/docs', swaggerUi.serve);
    enrutadorExpress.get('/docs', swaggerUi.setup(swaggerDocument));

    return enrutadorExpress;

};

module.exports = enrutadorApi;
