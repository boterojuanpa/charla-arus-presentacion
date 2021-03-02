const ErrorDeNegocio = require("../../error-de-negocio");

module.exports = (repositorioCeldas) => {

    async function validar(solicitudCrearNuevaCelda) {
        if (await repositorioCeldas.existeNumeroCelda(solicitudCrearNuevaCelda.numeroCelda)) {
            throw new ErrorDeNegocio(`Ya existe el numero de celda ${solicitudCrearNuevaCelda.numeroCelda}`);
        }
    }
    return {
        validar
    };

};
