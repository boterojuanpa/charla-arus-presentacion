/* eslint-disable arrow-body-style */
const ServicioPersistenciaMysql = require("./servicio-persitencia-mysql");

module.exports = class ServicioPersistenciaMysqlTestIntegracion extends ServicioPersistenciaMysql {

    async ejecutarTransaccion(transaccionEjecutar) {
        
        let resultado = {};
        let error = false;
        try {
            await this.sequelize.transaction(async (t) => {
                try {
                    resultado = await transaccionEjecutar();
                } catch (err) {
                    resultado = err;
                    error = true;
                }

                throw new Error();
            });
        } catch (err) { }
        if (error) {
            throw resultado;
        } else {
            return resultado;
        }

    }
};
