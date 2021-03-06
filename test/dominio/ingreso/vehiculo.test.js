/* eslint-disable arrow-body-style */
const { TiposCelda } = require("../../../src/dominio/celdas/modelo/tipo-celda");
const Vehiculo = require("../../../src/dominio/ingreso/modelo/vehiculo");

describe('pruebas para la clase de dominio vehiculo', () => {



    test('Creación de vehiculo sin placa debería lanzar error', async () => {
        expect(() => new Vehiculo(TiposCelda.BUS)).toThrow('La placa es requerida para realizar el ingreso');
    });



    test('Creación de vehiculo sin tipo vehiculo debería lanzar error', async () => {
        expect(() => new Vehiculo('', 'ASA4154')).toThrow('El tipo de vehiculo es requerido');
    });

    test('Validación correcta vehiculo', async () => {

        const vehiculo = new Vehiculo(TiposCelda.BUS, 'ASA154');

        expect(vehiculo.tipo).toBe(TiposCelda.BUS);
        expect(vehiculo.placa).toBe('ASA154');
    });

});
