/* eslint-disable arrow-body-style */
const Celda = require("../../../src/dominio/celdas/modelo/celda");
const { TiposCelda } = require("../../../src/dominio/celdas/modelo/tipo-celda");
const Ingreso = require("../../../src/dominio/ingreso/modelo/ingreso");
const Vehiculo = require("../../../src/dominio/ingreso/modelo/vehiculo");

describe('pruebas para la clase de dominio ingreso', () => {
    test('Creación de ingreso sin celda debería lanzar error', async () => {
        expect(() => new Ingreso()).toThrow('La celda es requerida para realizar el ingreso');
    });

    test('Creación de ingreso con una celda de tipo diferente al vehiculo', async () => {
        const celdaBus = new Celda(1, 25, TiposCelda.BUS);
        const vehiculo = new Vehiculo(TiposCelda.CARRO, 'ASA141')
        expect(() => new Ingreso(celdaBus,vehiculo ,new Date())).toThrow('La celda de tipo bus no admite carro');
    });


    test('Creación de ingreso sin fecha ingreso debería lanzar error', async () => {
        const celdaBus = new Celda(1, 25, 'bus');
        const vehiculo = new Vehiculo(TiposCelda.CARRO, 'ASA141')
        expect(() => new Ingreso(celdaBus, vehiculo)).toThrow('La fecha ingreso es requerida para realizar el ingreso');
    });



    test('Validación correcta ingreso', async () => {
        const fechaActual = new Date();
        const celdaBus = new Celda(1, 25, TiposCelda.BUS);
        
        const vehiculo = new Vehiculo(TiposCelda.BUS, 'ASA141');

        const ingreso = new Ingreso(celdaBus, vehiculo, new Date());

        expect(ingreso.celda).toBe(celdaBus);
        expect(ingreso.fechaIngreso.toISOString()).toBe(fechaActual.toISOString());
        expect(ingreso.vehiculo.placa).toBe('ASA141');
    });

});
