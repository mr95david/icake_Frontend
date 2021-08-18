import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesTodosComponent } from './clientes-todos.component';

describe('ClientesTodosComponent', () => {
  let component: ClientesTodosComponent;
  let fixture: ComponentFixture<ClientesTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
