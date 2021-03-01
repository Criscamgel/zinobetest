import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatauserService } from 'src/app/services/datauser.service';

@Component({
  selector: 'app-modal-contenido',
  templateUrl: './modal-contenido.component.html',
  styleUrls: ['./modal-contenido.component.scss']
})
export class ModalContenidoComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,
              public dataUser: DatauserService) { }

  ngOnInit(): void {
  }

}
