import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPagoPagosComponent } from './registrar-pago-pagos.component';

describe('RegistrarPagoPagosComponent', () => {
  let component: RegistrarPagoPagosComponent;
  let fixture: ComponentFixture<RegistrarPagoPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPagoPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPagoPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
