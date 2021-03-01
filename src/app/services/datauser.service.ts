import { Injectable } from '@angular/core';
import { Deudor } from 'src/app/interfaces/deudor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ModalContenidoComponent } from '../components/modal-contenido/modal-contenido.component';

@Injectable({
  providedIn: 'root'
})
export class DatauserService {

  deudor:Deudor = {
    nombre: null,
    correo: null,
    cedula: null,
    valorSolicitado: 0,
    fechaPagar: null,
    pagoCredito: false,
    respuesta: null
  };

  errorDineroPrestamo = true;
  loader = true;

  constructor(public modalService: NgbModal) {}

  viabilizar(){
    setTimeout(() => {
      this.loader = false;
    }, 2000);
    this.deudor.respuesta = this.randomNumero()
    this.modalService.open(ModalContenidoComponent);
    //this.deudor.valorSolicitado = 0;    
    console.log(this.deudor);
  }

  randomNumero(){
    let ram = Math.random();
    ram < 0.5 ? ram = 0 : ram = 1;
    return ram;
  }
}
