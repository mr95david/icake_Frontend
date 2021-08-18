import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PedidosNuevosComponent } from './pedidos-nuevos/pedidos-nuevos.component';
import { PedidosEnprocesoComponent } from './pedidos-enproceso/pedidos-enproceso.component';
import { PedidosEntregadosComponent } from './pedidos-entregados/pedidos-entregados.component';
import { ClientesTodosComponent } from './clientes-todos/clientes-todos.component';
import { PedidosEnviadosComponent } from './pedidos-enviados/pedidos-enviados.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    PedidosNuevosComponent,
    PedidosEnprocesoComponent,
    PedidosEntregadosComponent,
    ClientesTodosComponent,
    PedidosEnviadosComponent
  ],
  imports: [
    CommonModule,
    SidebarModule.forRoot(),
    RouterModule
  ],
  exports: [
    LoginComponent,
    SidebarComponent
  ],
})
export class AdminModule { }
