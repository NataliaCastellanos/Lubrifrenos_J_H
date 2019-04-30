import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPagosComponent } from './modificar-pagos.component';

describe('ModificarPagosComponent', () => {
  let component: ModificarPagosComponent;
  let fixture: ComponentFixture<ModificarPagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
