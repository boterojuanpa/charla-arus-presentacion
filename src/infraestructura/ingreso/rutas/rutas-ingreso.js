const express = require('express');
const controladorIngreso = require('../controlador/controlador-ingreso');

const rutasIngreso = (gestorDeDependencias) => {
    const enrutadorExpress = express.Router();

    const controladorRutas = controladorIngreso(gestorDeDependencias);

    enrutadorExpress.route('/')
        .post(controladorRutas.ingresar);
    return enrutadorExpress;
};

module.exports = rutasIngreso;
