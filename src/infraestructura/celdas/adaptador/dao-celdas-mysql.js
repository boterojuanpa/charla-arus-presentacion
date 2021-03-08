const DaoCeldas = require('../../../dominio/celdas/puerto/dao-celdas');

module.exports = class DaoCeldasMysql extends DaoCeldas {

    constructor(sequelize) {
        super();
        this.sequelize = sequelize;
    }

    async consultarTodas() {
        return this.sequelize.query('SELECT id, tipo, numeroCelda FROM celdas', { type: 'SELECT' });
    }

};
