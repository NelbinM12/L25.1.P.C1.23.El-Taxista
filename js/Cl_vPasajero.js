export default class Cl_vPasajero {
    constructor(){
        this.inPasajero = document.getElementById("pasajeroForm_inPasajero");
        this.inBolivares = document.getElementById("pasajeroForm_inBolivares");
        this.inDolares = document.getElementById("pasajeroForm_inDolares");
        this.btProcesar = document.getElementById("pasajeroForm_btProcesar");

    }
    get pasajero(){
        return this.inPasajero.value;
    }

    get bolivares(){
        return +this.inBolivares.value;
    }
    get dolares(){
        return +this.inDolares.value;
    }


}