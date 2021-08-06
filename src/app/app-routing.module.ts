import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsContactComponent } from './components/forms-contact/forms-contact.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'formulario', component: FormsContactComponent },
  { path: 'login', component: LoginComponent }
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


