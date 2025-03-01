export default class Cl_mTaxi{
    constructor (comienzaBs = 0, comienzaDolares = 0){
        this.comienzaBs = comienzaBs;
        this.comienzaDolares = comienzaDolares;
        this.acBolivares = 0;
        this.acDolares = 0;
        this.contCaramelos = 0;
        this.contPasajerosBs = 0;
        this.contPasajeros = 0;
    }
    set comienzaBs(comienzaBs){
        this._comienzaBs = +comienzaBs;
    }
    get comienzaBs(){
        return this._comienzaBs;
    }
    set comienzaDolares(comienzaDolares){
        this._comienzaDolares = +comienzaDolares;
    }
    get comienzaDolares(){
        return this._comienzaDolares;
    }
    procesarPasajero(pasajero){
        this.acBolivares += pasajero.bolivares;
        this.acDolares += pasajero.dolares;
        this.contCaramelos += pasajero.caramelos() ? 1 : 0;
        this.contPasajeros++;
        this.contPasajerosBs+= pasajero.bolivares > 0 ? 1 : 0;
    }
    tieneAlFinalBs(){
        return this.comienzaBs + this.acBolivares;
    }
    tieneAlFinalDolares(){
        return this.comienzaDolares + this.acDolares;
    }
    cantCaramelosRepartidos(){
        return this.contCaramelos;
    }
    porcPasajerosPagaEnBs(){
        if(this.contPasajeros === 0) return 0;
        else return (this.contPasajerosBs / this.contPasajeros) * 100;
    }
}