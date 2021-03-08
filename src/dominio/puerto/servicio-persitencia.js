module.exports = class ServicioDePersistencia {

    constructor() {
        this.repositorioCeldas = null;
        this.repositorioIngresos = null;
        this.daoCeldas = null;
    }

    iniciarBaseDeDatos() {
        return Promise.reject(new Error('no implementado'));
    }

    ejecutarTransaccion(transaccion) {
        return Promise.reject(new Error('no implementado'));
    }

};
