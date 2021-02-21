import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegusuariosComponent } from './regusuarios.component';

describe('RegusuariosComponent', () => {
  let component: RegusuariosComponent;
  let fixture: ComponentFixture<RegusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
