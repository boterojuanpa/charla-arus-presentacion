const app = require("../../src/app");
const request = require('supertest');


describe('Pruebas de integracion para el proceso de celda', () => {
    test('Creación correcta de una celda', (done) => {
        request(app)
            .post('/api/celda')
            .send({ numeroCelda: 189, tipo: 'bicicleta' })
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