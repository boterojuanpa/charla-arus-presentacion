const Celda = require('../../../dominio/celdas/modelo/celda');
const servicioValidarSiNumeroCeldaExiste = require('../../../dominio/celdas/modelo/servicio-validar-si-numero-celda-existe');

module.exports = (servicioPersistencia, servicioMensajeriaCorreoElectronico) => {

    const { repositorioCeldas } = servicioPersistencia;

    async function ejecutar(solicitudCrearNuevaCelda) {

        return servicioPersistencia.ejecutarTransaccion(async () => {
            await servicioValidarSiNumeroCeldaExiste(repositorioCeldas).validar(solicitudCrearNuevaCelda);

            const celda = new Celda(null, solicitudCrearNuevaCelda.numeroCelda, solicitudCrearNuevaCelda.tipo);
            const resultado = await repositorioCeldas.crear(celda);

            await servicioMensajeriaCorreoElectronico.enviar(resultado);

            return resultado;
        });
    }

    return {
        ejecutar,
    };
};
