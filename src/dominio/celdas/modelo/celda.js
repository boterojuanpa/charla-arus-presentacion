const ErrorDeNegocio = require("../../error-de-negocio");
const { validarRequerido, validarPositivo } = require("../../validaciones-argumento");
const { esTipoCeldaPermitido } = require("./tipo-celda");

module.exports = class Celda {
    #id;
    #numeroCelda;
    #tipo;
    constructor(id, numeroCelda, tipo) {
        this.#id = id;
        this.#numeroCelda = numeroCelda;
        this.#tipo = tipo;

        validarRequerido(numeroCelda, 'El numero de celda es requerido');
        validarRequerido(tipo, 'El tipo de celda es requerido')
        validarPositivo(numeroCelda , 'El numero de celda debe ser un numero positivo' )    
        
        if(!esTipoCeldaPermitido(tipo)){
            throw new ErrorDeNegocio(`El tipo de celda ${tipo} no está permitido en este estacionamiento`);
        }
        
    }

    get id(){
        return this.#id;
    }

    get numeroCelda(){
        return this.#numeroCelda;
    }

    get tipo(){
        return this.#tipo;
    }
};
