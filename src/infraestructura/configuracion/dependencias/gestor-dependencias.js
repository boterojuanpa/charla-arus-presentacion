const ServicioMensajeriaCorreoElectronicoGmail = require('../email/servicio-mensajeria-correo-electronico-gmail');
const ServicioPersistenciaMysql = require('../persistencia/servicio-persitencia-mysql');
const ServicioPersistenciaMysqlTestIntegracion = require('../persistencia/servicio-persitencia-mysql-test-integracion');

module.exports = (() => {
    return {
        ServicioDePersistencia: process.env.NODE_ENV === 'test' ? new ServicioPersistenciaMysqlTestIntegracion() : new ServicioPersistenciaMysql(),
        ServicioMensajeriaCorreoElectronico: new ServicioMensajeriaCorreoElectronicoGmail()
    };
})();
