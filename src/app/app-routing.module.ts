import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsContactComponent } from './components/forms-contact/forms-contact.component';
import { LoginComponent } from './admin/login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

const routes: Routes = [
  //{ path: 'header', component: HeaderComponent },
  { path: '', component: HomeComponent },
  { path: 'formulario', component: FormsContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: SidebarComponent },
  { path: 'admin/:id', component: SidebarComponent }
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


