import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEnprocesoComponent } from './pedidos-enproceso.component';

describe('PedidosEnprocesoComponent', () => {
  let component: PedidosEnprocesoComponent;
  let fixture: ComponentFixture<PedidosEnprocesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosEnprocesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEnprocesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
