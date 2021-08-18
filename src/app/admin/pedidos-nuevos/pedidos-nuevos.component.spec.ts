import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosNuevosComponent } from './pedidos-nuevos.component';

describe('PedidosNuevosComponent', () => {
  let component: PedidosNuevosComponent;
  let fixture: ComponentFixture<PedidosNuevosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosNuevosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosNuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
