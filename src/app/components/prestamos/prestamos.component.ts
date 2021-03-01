import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  env = environment;
  dineroDisp = 100000000;
  dineroPrestamo = new FormControl(0);
  errorDineroPrestamo = false;

  constructor() { 
    this.dineroPrestamoChange();
   }

  ngOnInit(): void {
  }

  dineroPrestamoChange(){
    this.dineroPrestamo.valueChanges.subscribe(value => {
      //debugger;
      if ((value < this.env.montoMinPrestamo || value > this.env.montoMaxPrestamo) && this.dineroPrestamo.dirty) {
        //this.dataService.setMonto(0);
        this.errorDineroPrestamo = true;
        this.dineroDisp = 100000000;
      } else {
        //this.dataService.setMonto(value);
        this.errorDineroPrestamo = false;
        this.dineroDisp -= value;
      }
    });
  }

}
