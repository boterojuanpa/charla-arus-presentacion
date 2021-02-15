const Celda = require('../../../dominio/celdas/modelo/celda');
const ErrorDeNegocio = require('../../../dominio/error-de-negocio');

module.exports = (servicioPersistencia) => {

    const { repositorioCeldas } = servicioPersistencia;

    async function ejecutar(solicitudCrearNuevaCelda) {

        if (await repositorioCeldas.existeNumeroCelda(solicitudCrearNuevaCelda.numeroCelda)) {
            throw new ErrorDeNegocio(`Ya existe el numero de celda ${solicitudCrearNuevaCelda.numeroCelda}`);
        }

        const celda = new Celda(null, solicitudCrearNuevaCelda.numeroCelda, solicitudCrearNuevaCelda.tipo);
        const resultado = await repositorioCeldas.crear(celda);

        return resultado;
    }

    return {
        ejecutar,
    };
};
