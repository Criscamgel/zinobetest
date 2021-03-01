import { Injectable } from '@angular/core';
import { Deudor } from 'src/app/interfaces/deudor'

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
    pagoCredito: null,
    respuesta: null
  };

  errorDineroPrestamo = false;

  constructor() {}
}
