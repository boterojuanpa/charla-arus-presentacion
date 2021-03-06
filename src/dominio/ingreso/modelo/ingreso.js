const ErrorDeNegocio = require("../../error-de-negocio");
const { validarRequerido } = require("../../validaciones-argumento");

module.exports = class Ingreso {

    #celda;
    #vehiculo;
    #fechaIngreso

    constructor(celda, vehiculo, fechaIngreso){  
        
        validarRequerido(celda, 'La celda es requerida para realizar el ingreso');        
        validarRequerido(vehiculo, 'El  vehiculo es requerido');        
        validarRequerido(fechaIngreso, 'La fecha ingreso es requerida para realizar el ingreso');        

        this.#fechaIngreso = new Date(fechaIngreso);
        this.#celda = celda;
        this.#vehiculo = vehiculo;

        if(celda.tipo !== vehiculo.tipo){
            throw new ErrorDeNegocio(`La celda de tipo ${celda.tipo} no admite ${vehiculo.tipo}`)
        }
    }

    get celda(){
        return this.#celda;
    }

    get fechaIngreso(){
        return this.#fechaIngreso;
    }

    get vehiculo(){
        return this.#vehiculo;
    }




}
