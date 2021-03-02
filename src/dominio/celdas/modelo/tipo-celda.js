const TiposCelda = Object.freeze({ BUS: 'bus', MOTO: 'moto', CARRO: 'carro', BICICLETA: 'bicileta' });

const esTipoCeldaPermitido = (tipo) => {
    return Object.values(TiposCelda).indexOf(tipo) > -1;
};

module.exports = { TiposCelda, esTipoCeldaPermitido };
