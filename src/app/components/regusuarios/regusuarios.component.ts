import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      nombre: [0, [Validators.required, Validators.minLength(6)]],
      correo: [0, [Validators.required, Validators.minLength(6), Validators.pattern(this.env.patternMail)]],
      cedula: [0, [Validators.required, Validators.minLength(6)]],
      valorSolicitado: [0, [Validators.required]],
      fechaPagar: [0, [Validators.required]],
      pagoCredito: [0, [Validators.required]],
      respuesta: [0, [Validators.required]],
    });

    this.dataDeudor.controls['nombre'].valueChanges.subscribe(value => this.dataUser.deudor.nombre = value);
    this.dataDeudor.controls['correo'].valueChanges.subscribe(value => this.dataUser.deudor.correo = value);
    this.dataDeudor.controls['cedula'].valueChanges.subscribe(value => this.dataUser.deudor.cedula = value);
    this.dataDeudor.controls['valorSolicitado'].valueChanges.subscribe(value => this.dataUser.deudor.valorSolicitado = value);
    this.dataDeudor.controls['fechaPagar'].valueChanges.subscribe(value => this.dataUser.deudor.fechaPagar = value);
    this.dataDeudor.controls['pagoCredito'].valueChanges.subscribe(value => this.dataUser.deudor.pagoCredito = value);
   }

}
