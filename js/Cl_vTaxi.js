import Cl_vPasajero from "./Cl_vPasajero.js";
import Cl_mPasajero from "./Cl_mPasajero.js";

export default class Cl_vTaxi{
    constructor(){
        this.controlador = null;
        this.inIniciaConBolivares = document.getElementById("mainForm_iniciaConBolivares");
        this.inIniciaConDolares = document.getElementById("mainForm_iniciaConDolares");
        this.btIniciar = document.getElementById("mainForm_btIniciar");
        this.tabla = document.getElementById("mainForm_tabla");
        this.salida = document.getElementById("salida");
        this.vPasajero = new Cl_vPasajero();
        this.vPasajero.btProcesar.onclick = () =>
            this.controlador.procesarPasajero();
        this.vPasajero.btProcesar.hidden = true;
        this.btIniciar.onclick = () => {
            this.controlador.iniciarTaxi(
                this.inIniciaConBolivares.value,
                this.inIniciaConDolares.value
            );
        this.inIniciaConBolivares.disabled = true;
        this.inIniciaConDolares.disabled = true;
        this.btIniciar.hidden = true;
        this.vPasajero.btProcesar.hidden = false;
        };
    }
    procesarPasajero(){
        this.mPasajero = new Cl_mPasajero({
            pasajero: this.vPasajero.pasajero,
            bolivares: this.vPasajero.bolivares,
            dolares: this.vPasajero.dolares,
        });
            return this.mPasajero;}
        reportarPasajero(
            contBolivares,
            contDolares,
            contCaramelos,
            porcPagaEnBs,
        )
        {
        this.tabla.innerHTML += `<tr>
        <td>${this.mPasajero.pasajero}</td>
        <td>${this.mPasajero.bolivares}</td>
        <td>${this.mPasajero.dolares}</td>
        <td>${this.mPasajero.caramelos()}</td>
        </tr>
        `;
        this.salida.innerHTML =`
        <br> Al final el taxista tiene Bs${contBolivares}
        <br> Al final el taxista tiene $${contDolares}
        <br> Se repartieron ${contCaramelos}
        <br> El ${porcPagaEnBs}% de los pasajeros paga en bolívares
        `;
    }

}