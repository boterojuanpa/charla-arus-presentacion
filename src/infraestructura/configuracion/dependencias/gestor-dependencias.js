const ServicioMensajeriaCorreoElectronicoGmail = require('../email/servicio-mensajeria-correo-electronico-gmail');
const ServicioPersistenciaMysql = require('../persistencia/servicio-persitencia-mysql');

module.exports = (() => {
    return {
        ServicioDePersistencia: new ServicioPersistenciaMysql(),
        ServicioMensajeriaCorreoElectronico: new ServicioMensajeriaCorreoElectronicoGmail()
    };
})();
