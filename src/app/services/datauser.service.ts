import { Injectable } from '@angular/core';
import { Deudor } from 'src/app/interfaces/deudor'

@Injectable({
  providedIn: 'root'
})
export class DatauserService {

  deudor:Deudor;

  constructor() {}
}
