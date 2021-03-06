const crearCelda = require("../../../src/aplicacion/casos-uso/celda/crear-celda");
const ServicioMensajeriaCorreoElectronico = require("../../../src/dominio/puerto/servicio-mensajeria-correo-electronico");
const ServicioPersistenciaMock = require("../../configuracion/servicio-persistencia-mock");
const { TiposCelda } = require("../../../src/dominio/celdas/modelo/tipo-celda");

const servicioPersistencia = new ServicioPersistenciaMock();
const servicioMensajeriaCorreoElectronico = new ServicioMensajeriaCorreoElectronico();
describe('Pruebas para el caso de uso crear celda', () => {

    test('Si número de celda ya existe debería retornar error', async () => {

        servicioPersistencia.repositorioCeldas.existeNumeroCelda = jest.fn(() => true);

        const casoDeUsoCrearCelda = crearCelda(servicioPersistencia, servicioMensajeriaCorreoElectronico);
        const solicitudCrearNuevaCelda = { numeroCelda: 5 };
        await expect(casoDeUsoCrearCelda.ejecutar(solicitudCrearNuevaCelda))
            .rejects.toThrow(`Ya existe el numero de celda ${solicitudCrearNuevaCelda.numeroCelda}`);

    })

    test('Creación correcta de la celda debería almacenar y notificar por correo', async () => {

        servicioPersistencia.repositorioCeldas.existeNumeroCelda = jest.fn(() => false);
        servicioPersistencia.repositorioCeldas.crear = jest.fn(() => { return { id: 95 } });
        servicioMensajeriaCorreoElectronico.enviar = jest.fn(() => { });

        const casoDeUsoCrearCelda = crearCelda(servicioPersistencia, servicioMensajeriaCorreoElectronico);

        const solicitudCrearNuevaCelda = { numeroCelda: 5, tipo: TiposCelda.BUS };

        const resultadoCeldaAlmacenada = await casoDeUsoCrearCelda.ejecutar(solicitudCrearNuevaCelda);

        expect(resultadoCeldaAlmacenada.id).toBe(95);

        expect(servicioMensajeriaCorreoElectronico.enviar).toHaveBeenCalled();

        const mensajeEnviado = servicioMensajeriaCorreoElectronico.enviar.mock.calls[0][0];
        expect(mensajeEnviado.id).toBe(95);

    })

})
