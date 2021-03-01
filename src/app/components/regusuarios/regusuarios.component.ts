import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DatauserService } from 'src/app/services/datauser.service'

@Component({
  selector: 'app-regusuarios',
  templateUrl: './regusuarios.component.html',
  styleUrls: ['./regusuarios.component.scss']
})
export class RegusuariosComponent implements OnInit {

  env = environment;
  dataDeudor: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public dataUser: DatauserService
    ) { 
    this.crearFormulario();
   }

  ngOnInit(): void {
  }

  patternCoincide(event, value) {
    const pattern =  new RegExp(value);
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  crearFormulario(){
    this.dataDeudor = this.formBuilder.group({
      nombre: [null, [Validators.required, Validators.minLength(6)]],
      correo: [null, [Validators.required, Validators.minLength(6), Validators.pattern(this.env.patternMail)]],
      cedula: [null, [Validators.required, Validators.minLength(6)]],
      fechaPagar: [null],
      pagoCredito: [null]
    });

    this.dataDeudor.controls['nombre'].valueChanges.subscribe(value => this.dataUser.deudor.nombre = value);
    this.dataDeudor.controls['correo'].valueChanges.subscribe(value => this.dataUser.deudor.correo = value);
    this.dataDeudor.controls['cedula'].valueChanges.subscribe(value => this.dataUser.deudor.cedula = value);
    this.dataDeudor.controls['fechaPagar'].valueChanges.subscribe(value => this.dataUser.deudor.fechaPagar = value);
    this.dataDeudor.controls['pagoCredito'].valueChanges.subscribe(value => this.dataUser.deudor.pagoCredito = value);
   }

   get nombreExiste() {
    return this.dataDeudor.get('nombre').invalid;
  }
   get correoExiste() {
    return this.dataDeudor.get('correo').invalid;
  }
   get cedulaExiste() {
    return this.dataDeudor.get('cedula').invalid;
  }

   /* No Valido */
   get nombreNovalido() {
    return this.dataDeudor.get('nombre').invalid && this.dataDeudor.get('nombre').touched;
  }
   get correoNovalido() {
    return this.dataDeudor.get('correo').invalid && this.dataDeudor.get('correo').touched;
  }
   get cedulaNovalido() {
    return this.dataDeudor.get('cedula').invalid && this.dataDeudor.get('cedula').touched;
  }

}
