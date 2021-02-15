const express = require('express');
const ControladorCelda = require('../controlador/controlador-celda');

const rutasCelda = (gestorDeDependencias) => {
    const enrutadorExpress = express.Router();

    const controladorRutas = ControladorCelda(gestorDeDependencias);

    enrutadorExpress.route('/')
        .post(controladorRutas.crear);
    enrutadorExpress.route('/')
        .get(controladorRutas.obtenerTodas);
    return enrutadorExpress;
};

module.exports = rutasCelda;
