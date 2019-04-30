import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPagosComponent } from './mostrar-pagos.component';

describe('MostrarPagosComponent', () => {
  let component: MostrarPagosComponent;
  let fixture: ComponentFixture<MostrarPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
