/* eslint-disable arrow-body-style */
const ServicioDePersistencia = require("../../../dominio/puerto/servicio-persitencia");
const DaoCeldasMysql = require("../../celdas/adaptador/dao-celdas-mysql");
const RepositorioCeldasMysql = require("../../celdas/adaptador/repositorio-celdas-mysql");
const RepositorioIngresoMysql = require("../../ingreso/adaptador/repositorio-ingreso-mysql");
const sequelize = require("./sequelize");

module.exports = class ServicioPersistenciaMysql extends ServicioDePersistencia {
    constructor() {
        super();
        this.sequelize = sequelize;
        this.repositorioCeldas = new RepositorioCeldasMysql(this.sequelize);
        this.repositorioIngresos = new RepositorioIngresoMysql(this.sequelize);
        this.daoCeldas = new DaoCeldasMysql(this.sequelize);
    }

    async iniciarBaseDeDatos() {
        this.iniciarDatosSemilla();
    }

    async iniciarDatosSemilla() {
        console.log('Se inicia base de datos');
    }

    async ejecutarTransaccion(transaccionEjecutar) {
        return sequelize.transaction(async (t1) => transaccionEjecutar());
    }
};
