const { validarRequerido } = require("../../validaciones-argumento");

module.exports = class Vehiculo {

    #tipo;
    #placa;

    constructor(tipo, placa){
        validarRequerido(placa, 'La placa es requerida para realizar el ingreso');
        validarRequerido(tipo, 'El tipo de vehiculo es requerido');

        this.#tipo = tipo;
        this.#placa = placa;
    }

    get placa(){
        return this.#placa;
    }

    get tipo(){
        return this.#tipo;
    }

}