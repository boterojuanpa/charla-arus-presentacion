const ingresarVehiculo = require('../../../aplicacion/casos-uso/ingreso/ingresar-vehiculo');

module.exports = (gestorDeDependencias) => {
    const { ServicioDePersistencia } = gestorDeDependencias;

    const ingresar = (req, res, next) => {
        const comandoIngresarVehiculo = ingresarVehiculo(ServicioDePersistencia);

        comandoIngresarVehiculo.ejecutar(req.body).then((respuesta) => {
            res.json(respuesta);
        }, (err) => {
            next(err);
        });
    };
    return {
        ingresar
    };
};
