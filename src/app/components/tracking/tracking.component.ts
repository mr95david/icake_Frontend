import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { TrackingService } from './tracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  constructor (
    public modalService: NgbModal, 
    private trackingService: TrackingService
  ) {

  }

  public codigoPedido;

  getCodigoPedido(val) {
    // console.log(val)
    this.codigoPedido = val;
  }

  pedidoById() {
    this.trackingService.getPedidoById(this.codigoPedido).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message == "pedido no encontrado") {
          console.log('no existe el codigo de pedido')
        }
      }, 
      (err) => {
      // console.log('este es el error',err)
        if (err.statusText == "Unknown Error") {
          console.log('codigo de pedido inválido')
        } else if (err.message == "pedido no encontrado") {
          console.log('no existe el codigo de pedido (ERROR)')
        }
      }
    );
  }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.my_modal_title = 'I your title';
    modalRef.componentInstance.my_modal_content = 'I am your content';
  }

}
