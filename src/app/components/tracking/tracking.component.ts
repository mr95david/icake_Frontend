import { Component, Type, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { TrackingService } from './tracking.service';


@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css'],

})

export class TrackingComponent implements OnInit {

  closeResult: string

  

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
        this.open(JSON.stringify(res))
        console.log(res);
        if (res.message == "pedido no encontrado") {
          console.log('no existe el codigo de pedido')
        }
        // else{
        //   this.open()
        // }
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

  open(content) {
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
  }

  private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}



}
