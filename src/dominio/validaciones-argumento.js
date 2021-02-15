const ErrorDeNegocio = require("./error-de-negocio");

module.exports = class ValidadorArgumento {

    static validarRequerido(argumento, mensaje) {
        if (!argumento) {
            throw new ErrorDeNegocio(mensaje);
        }
    }

    static validarPositivo(argumento, mensaje) {
        if (argumento < 0) {
            throw new ErrorDeNegocio(mensaje);
        }
    }

};
