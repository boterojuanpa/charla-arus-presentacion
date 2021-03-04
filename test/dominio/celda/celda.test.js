const Celda = require("../../../src/dominio/celdas/modelo/celda");
const { TiposCelda } = require("../../../src/dominio/celdas/modelo/tipo-celda");

describe('Pruebas para la clase de dominio celda', () => {

    test('Creacion de celda sin numero de celda deberia retornar excepcion', async () => {
        expect(() => new Celda(0, null, TiposCelda.MOTO)).toThrow('El numero de celda es requerido');
    });

    test('Creacion de celda sin tipo de celda deberia retornar excepcion', async () => {
        expect(() => new Celda(0, 15, null)).toThrow('El tipo de celda es requerido');
    });

    test('Creacion de celda con numero de celda negativo deberia retornar excepcion', async () => {
        expect(() => new Celda(0, -15, TiposCelda.MOTO)).toThrow('El numero de celda debe ser un numero positivo');
    });

    test('Creacion de celda con tipo de celda no permitido deberia retornar excepcion', async () => {
        const tipoCelda = 'avion';
        expect(() => new Celda(0, 15, tipoCelda)).toThrow(`El tipo de celda ${tipoCelda} no está permitido en este estacionamiento`);
    });

    test('Creación de celda con datos correctos debería ser exitosa', async () => {

        const celda = new Celda(0, 15, TiposCelda.CARRO);

        expect(celda.id).toBe(0);
        expect(celda.numeroCelda).toBe(15);
        expect(celda.tipo).toBe(TiposCelda.CARRO);
    });

});