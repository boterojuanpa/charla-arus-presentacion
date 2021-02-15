const ServicioPersistenciaMysql = require('../persistencia/servicio-persitencia-mysql');

module.exports = (() => {
    return {
        ServicioDePersistencia: new ServicioPersistenciaMysql()
    };
})();
