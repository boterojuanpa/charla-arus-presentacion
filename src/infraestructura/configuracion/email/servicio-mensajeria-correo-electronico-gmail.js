const ServicioMensajeriaCorreoElectronico = require("../../../dominio/puerto/servicio-mensajeria-correo-electronico");

module.exports = class ServicioMensajeriaCorreoElectronicoGmail extends ServicioMensajeriaCorreoElectronico {

    enviar(cuerpoCorreo) {
        console.log('Envio de correo');
        console.table(cuerpoCorreo);

        throw new Error('Error conectandome con el host');
    }

};
