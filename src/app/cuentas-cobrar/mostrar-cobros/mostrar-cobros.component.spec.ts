import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCobrosComponent } from './mostrar-cobros.component';

describe('MostrarCobrosComponent', () => {
  let component: MostrarCobrosComponent;
  let fixture: ComponentFixture<MostrarCobrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarCobrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCobrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
