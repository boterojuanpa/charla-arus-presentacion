const ErrorDeNegocio = require('../../../dominio/error-de-negocio');
const logger = require('./winston');

const ERROR_DE_CLIENTE = 400;
const ERROR_DE_SERVIDOR = 500;
const ManejadorError = (err, req, res, next) => {

    const respuestaError = { mensaje: 'Ha ocurrido un error en el servidor, verfique con el administrador', estado: ERROR_DE_SERVIDOR };

    if (err instanceof ErrorDeNegocio) {
        respuestaError.estado = ERROR_DE_CLIENTE;
        respuestaError.mensaje = err.message;
    } else {
        logger.error(`Error servidor`, err);
    }

    res.status(respuestaError.estado);
    res.json({ error: respuestaError.mensaje });
};

module.exports = ManejadorError;
