const Celda = require('../../../dominio/celdas/modelo/celda');
const RepositorioCeldas = require('../../../dominio/celdas/puerto/repositorio-celdas');

module.exports = class RepositorioCeldasMysql extends RepositorioCeldas {

    constructor(sequelize) {
        super();
        this.sequelize = sequelize;
        this.modelo = this.sequelize.models.celda;
    }

    async crear(celda) {
        const nuevaCelda = await this.modelo.create({ tipo: celda.tipo, numeroCelda: celda.numeroCelda });
        await nuevaCelda.save();
        return { id: nuevaCelda.id };
    }

    async obtenerPorId(idCelda) {
        const celdaEncontrada = await this.modelo.findByPk(idCelda);
        return celdaEncontrada ? new Celda(celdaEncontrada.id, celdaEncontrada.numeroCelda, celdaEncontrada.tipo) : null;
    }

    async consultarTodas() {
        return this.model.findAll();
    }

    async existeNumeroCelda(numeroCelda) {
        return await this.modelo.count({ where: { numeroCelda } }) > 0;
    }
};
