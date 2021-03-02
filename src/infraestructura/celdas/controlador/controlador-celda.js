const crearCelda = require('../../../aplicacion/casos-uso/celda/crear-celda');

module.exports = (gestorDeDependencias) => {
    const { ServicioDePersistencia, ServicioMensajeriaCorreoElectronico } = gestorDeDependencias;
    const { daoCeldas } = ServicioDePersistencia;

    const crear = (req, res, next) => {
        const comandoCrearCelda = crearCelda(ServicioDePersistencia, ServicioMensajeriaCorreoElectronico);

        comandoCrearCelda.ejecutar(req.body).then((respuesta) => {
            res.json(respuesta);
        }, (err) => {
            next(err);
        });
    };
    const obtenerTodas = (req, res, next) => {
        daoCeldas.consultarTodas().then((celdas) => {
            res.json(celdas);
        }, (err) => {
            next(err);
        });
    };

    return {
        crear,
        obtenerTodas,
    };
};
