import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContenidoComponent } from './modal-contenido.component';

describe('ModalContenidoComponent', () => {
  let component: ModalContenidoComponent;
  let fixture: ComponentFixture<ModalContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
