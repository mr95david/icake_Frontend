import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsContactComponent } from './components/forms-contact/forms-contact.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { PedidosNuevosComponent } from './admin/pedidos-nuevos/pedidos-nuevos.component';
import { PedidosEnprocesoComponent } from './admin/pedidos-enproceso/pedidos-enproceso.component';
import { PedidosEnviadosComponent } from './admin/pedidos-enviados/pedidos-enviados.component';
import { PedidosEntregadosComponent } from './admin/pedidos-entregados/pedidos-entregados.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  //{ path: 'header', component: HeaderComponent },
  { path: '', component: HomeComponent },
  { path: 'formulario', component: FormsContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'nuevos',
        component: PedidosNuevosComponent
      },
      {
        path: 'enProceso',
        component: PedidosEnprocesoComponent
      },
      {
        path: 'enviados',
        component: PedidosEnviadosComponent
      },
      {
        path: 'entregados',
        component: PedidosEntregadosComponent
      },
    ]
    
  }
]

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


