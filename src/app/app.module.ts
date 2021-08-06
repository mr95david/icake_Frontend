import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';
import { StatusOrderComponent } from './components/status-order/status-order.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { PedidoComponent } from './components/pedido/pedido.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsContactComponent } from './components/forms-contact/forms-contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { JumboComponent } from './components/jumbo/jumbo.component';
import { TrackingComponent } from './components/tracking/tracking.component';
import { ModalComponent } from './components/modal/modal.component';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    CarouselComponent,
    StatusOrderComponent,
    PedidoComponent,
    FooterComponent,

    FormsContactComponent,

    NavbarComponent,
    ContactComponent,
    JumboComponent,
    TrackingComponent,
    ModalComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
