const RepositorioIngresos = require('../../../dominio/ingreso/puerto/repositorio-ingresos');

module.exports = class RepositorioIngresoMysql extends RepositorioIngresos {

    constructor(sequelize) {
        super();
        this.sequelize = sequelize;
        this.modelo = this.sequelize.models.ingreso;
    }

    async crear(ingreso) {
        const nuevaIngreso = await this.modelo.create({ placa: ingreso.vehiculo.placa, fechaIngreso: ingreso.fechaIngreso, celdaId: ingreso.celda.id });
        await nuevaIngreso.save();
        return { id: nuevaIngreso.id };
    }

};
