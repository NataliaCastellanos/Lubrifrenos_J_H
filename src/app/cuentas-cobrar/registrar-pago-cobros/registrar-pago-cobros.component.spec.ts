import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPagoCobrosComponent } from './registrar-pago-cobros.component';

describe('RegistrarPagoCobrosComponent', () => {
  let component: RegistrarPagoCobrosComponent;
  let fixture: ComponentFixture<RegistrarPagoCobrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarPagoCobrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPagoCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
