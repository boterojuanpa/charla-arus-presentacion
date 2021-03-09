require('dotenv').config();

const app = require("../../src/app");
const request = require('supertest');
const { TiposCelda } = require('../../src/dominio/celdas/modelo/tipo-celda');


describe('Pruebas de integracion para el proceso de celda', () => {
    test('Creacion correcta de una celda', (done) => {
        request(app)
            .post('/api/celda')
            .send({ numeroCelda: 250, tipo: TiposCelda.BUS })
            .set('Accept', 'application/json')
            .expect((response) => {
                if (!'id' in response.body) {
                    throw new Error('Se esperaba que retornara un id pero no lo retorno');
                }
            })
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });

})