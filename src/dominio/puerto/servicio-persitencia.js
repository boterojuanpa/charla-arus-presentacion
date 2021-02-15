module.exports = class ServicioDePersistencia {

    constructor() {
        this.repositorioCeldas = null;
        this.daoCeldas = null;
    }

    iniciarBaseDeDatos() {
        return Promise.reject(new Error('no implementado'));
    }

    ejecutarTransaccion() {
        return Promise.reject(new Error('no implementado'));
    }

};
