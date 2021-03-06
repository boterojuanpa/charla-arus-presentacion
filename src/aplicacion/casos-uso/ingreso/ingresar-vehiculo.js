const Ingreso = require('../../../dominio/ingreso/modelo/ingreso');
const Vehiculo = require('../../../dominio/ingreso/modelo/vehiculo');

module.exports = (servicioPersistencia) => {

    const { repositorioCeldas, repositorioIngresos } = servicioPersistencia;

    async function ejecutar(solicitudDeIngreso) {
        return servicioPersistencia.ejecutarTransaccion(async () => {
            const celda = await repositorioCeldas.obtenerPorId(solicitudDeIngreso.idCelda);
            const vehiculo = new Vehiculo(solicitudDeIngreso.tipoVehiculo, solicitudDeIngreso.placa)
            const ingreso = new Ingreso(celda,vehiculo, solicitudDeIngreso.fechaIngreso);
            return repositorioIngresos.crear(ingreso);
        });
    }

    return {
        ejecutar,
    };
};
