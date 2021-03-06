const DaoCeldas = require("../../src/dominio/celdas/puerto/dao-celdas");
const RepositorioCeldas = require("../../src/dominio/celdas/puerto/repositorio-celdas");
const RepositorioIngresos = require("../../src/dominio/ingreso/puerto/repositorio-ingresos");
const ServicioDePersistencia = require("../../src/dominio/puerto/servicio-persitencia");

module.exports = class ServicioPersistenciaMock extends ServicioDePersistencia {
    constructor() {
        super();
        this.repositorioCeldas = new RepositorioCeldas();
        this.daoCeldas = new DaoCeldas();
        this.repositorioIngresos = new RepositorioIngresos();
    }

    async iniciarBaseDeDatos() {
        this.iniciarDatosSemilla();
    }

    async iniciarDatosSemilla() {
        console.log('Se inicia base de datos');
    }

    async ejecutarTransaccion(transaccionEjecutar) {
        return transaccionEjecutar();
    }
};
