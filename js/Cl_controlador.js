export default class Cl_controlador {
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPasajero(){
        this.modelo.procesarPasajero(this.vista.procesarPasajero());
        this.vista.reportarPasajero(
            this.modelo.tieneAlFinalBs(),
            this.modelo.tieneAlFinalDolares(),
            this.modelo.cantCaramelosRepartidos(),
            this.modelo.porcPasajerosPagaEnBs()

        );
    }
    iniciarTaxi(comienzaBs,comienzaDolares){
        this.modelo.comienzaBs = comienzaBs;
        this.modelo.comienzaDolares = comienzaDolares;
    }
}