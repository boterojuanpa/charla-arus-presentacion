const express = require('express');
const swaggerUi = require('swagger-ui-express');
const rutasCelda = require('../../celdas/rutas/rutas-celdas');
const rutasIngreso = require('../../ingreso/rutas/rutas-ingreso');
const swaggerDocument = require('../swagger/swagger.json');

const enrutadorApi = (gestorDeDependencias) => {
    const enrutadorExpress = express.Router();

    const enrutadorCelda = rutasCelda(gestorDeDependencias);
    const enrutadorIngreso = rutasIngreso(gestorDeDependencias);

    enrutadorExpress.use('/celda', enrutadorCelda);
    enrutadorExpress.use('/ingreso', enrutadorIngreso);

    enrutadorExpress.use('/docs', swaggerUi.serve);
    enrutadorExpress.get('/docs', swaggerUi.setup(swaggerDocument));

    return enrutadorExpress;

};

module.exports = enrutadorApi;
