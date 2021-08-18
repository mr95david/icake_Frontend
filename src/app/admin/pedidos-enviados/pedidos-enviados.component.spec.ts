import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEnviadosComponent } from './pedidos-enviados.component';

describe('PedidosEnviadosComponent', () => {
  let component: PedidosEnviadosComponent;
  let fixture: ComponentFixture<PedidosEnviadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosEnviadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosEnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
