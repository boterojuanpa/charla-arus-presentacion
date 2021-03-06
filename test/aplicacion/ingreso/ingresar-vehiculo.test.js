/* eslint-disable arrow-body-style */
const ingresarVehiculo = require("../../../src/aplicacion/casos-uso/ingreso/ingresar-vehiculo");
const Celda = require("../../../src/dominio/celdas/modelo/celda");
const ServicioPersistenciaMock = require("../../configuracion/servicio-persistencia-mock");

const servicioDePersistencia = new ServicioPersistenciaMock();

describe('Pruebas para el caso de uso de ingresar vehiculo', () => {

    test('Ingresar vehiculo correctamente', async () => {
        // arrange
        servicioDePersistencia.repositorioCeldas.obtenerPorId = jest.fn(() => new Celda(1, 25, 'bus'));
        servicioDePersistencia.repositorioIngresos.crear = jest.fn(() => { });
        const comandoIngresarVehiculo = ingresarVehiculo(servicioDePersistencia);
        const solicitudIngreso = {
            tipoVehiculo: 'bus',
            placa: 'AZA123',
            fechaIngreso: new Date(),
            idCelda: 1
        };

        // act
        await comandoIngresarVehiculo.ejecutar(solicitudIngreso);

        // assert
        const ingreso = servicioDePersistencia.repositorioIngresos.crear.mock.calls[0][0];
        expect(ingreso.vehiculo.placa).toBe('AZA123');
        expect(ingreso.fechaIngreso.toISOString()).toBe(solicitudIngreso.fechaIngreso.toISOString());

    });
});
