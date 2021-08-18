import { Component, ElementRef, OnInit } from '@angular/core';
import { Pedido } from './pedido.model';
import { PedidoService } from './pedido.service';
type question = {[option: string]: number};

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  public questions!: question[];
  public step!: number;
  public titles!: string[];
  public opciones: any[][] = [];
  public position: number = 0;
  private priceTamaño: number = 0;
  private priceSabor: number = 0;
  private priceCobertura: number = 0;
  public priceTotal: number = 0;
  public backup!: number;
  private pedidoToSave: Pedido;
  public tamanoSeleccionado: string;
  public saborSeleccionado: string;
  public coberturaSeleccionado: string;
  public mensajeEscrito: any;
  public cedulaCliente: string;
  private token: string;
  private idProducto: string;
  public idPedido: string;

  constructor(
    private elementRef: ElementRef,
    private pedidoService: PedidoService
  ) {
    this.getTamaños();
    this.getCoberturas();
    this. getSabores();
  }

  public ngOnInit(): void {
    this.step = 0;
  
    this.titles = [
      "Escoge el tamaño de tu torta", 
      "Escoge el sabor de tu torta", 
      "Escoge la cobertura de tu torta",
      "Escribe aquí tu mensaje",
      "",
      "",
      "",
      ""
    ];
    this.priceTotal = 0;
  }

  private getTamaños() {
    this.pedidoService.getAllTamaños().subscribe(
      (res: any) => {
        this.opciones[0] = new Array(res.length).fill({'id': '', 'name': '', 'value': ''});

        this.opciones[0] = res.map((item) => {
          let obj = {};
          obj['name'] = item.tamano_libras;
          obj['value'] = item.precio;
          obj['id'] = item._id;
          return obj; 
        });
      },
      (err) => {
        console.log(err)
      }
    );
  }

  private getCoberturas() {
    this.pedidoService.getAllCoberturas().subscribe(
      (res: any) => {
        this.opciones[2] = new Array(res.length).fill({'id': '', 'name': '', 'value': ''});

        this.opciones[2] = res.map((item) => {
          let obj = {};
          obj['name'] = item.cobertura_torta;
          obj['value'] = item.precio;
          obj['id'] = item._id;
          return obj; 
        });
      },
      (err) => {
        console.log(err)
      }
    );
  }

  private getSabores() {
    this.pedidoService.getAllSabores().subscribe(
      (res: any) => {
        this.opciones[1] = new Array(res.length).fill({'id': '', 'name': '', 'value': ''});

        this.opciones[1] = res.map((item) => {
          let obj = {};
          obj['name'] = item.sabor_bizcocho;
          obj['value'] = item.precio;
          obj['id'] = item._id;
          return obj; 
        });
      },
      (err) => {
        console.log(err)
      }
    );
  }

  public next(): void {
    const container= this.elementRef.nativeElement.querySelectorAll(".container")[0];
    const content= this.elementRef.nativeElement.querySelectorAll(".content")[0];
    const position= container.scrollLeft;
    const width = content.clientWidth;
    const fullWidth = width * (this.titles.length);
    let current = position + width;
    if (current>fullWidth) return;
    container.scrollLeft = current;
    
    if (this.position < 8) {
      this.position++;
    }

    if (this.position === 3) {
      console.log(this.mensajeEscrito);
    }
  }

  public previous(): void {
    const container= this.elementRef.nativeElement.querySelectorAll(".container")[0];
    const content= this.elementRef.nativeElement.querySelectorAll(".content")[0];
    const position= container.scrollLeft;
    const width = content.clientWidth;
    const fullWidth = width * (this.titles.length - 1);
    let current = position - width;
    if (current>fullWidth) return;
    container.scrollLeft = current;
    
    if (this.position > 0) {
      this.position--;
    }
  }

  public onSelect(value: number, name: string): void {
    
    if (this.position === 0) {
      this.tamanoSeleccionado = name;
      this.priceTamaño = value;
    } else if (this.position === 1) {
      this.saborSeleccionado = name;
      this.priceSabor = value;
    } else if (this.position === 2) {
      this.coberturaSeleccionado = name;
      this.priceCobertura = value;
    }
    
    this.priceTotal = this.priceTamaño + this.priceSabor + this.priceCobertura;
  }

  public onGetMensaje(mensaje: string): void {
    this.mensajeEscrito = mensaje;
  }

  public onGetCedulaCliente(cedula: string): void {
    this.cedulaCliente = cedula;
  }

  public onSubmitPedido(): void {
    
    let dataProducto = {
      mensaje: this.mensajeEscrito,
      sabor_torta: this.saborSeleccionado,
      tamano_torta: this.tamanoSeleccionado,
      cobertura_torta: this.coberturaSeleccionado,
      precio_total: this.priceTotal
    };

    let dataPedido = {
      comprador: this.cedulaCliente,
      articulo: this.idProducto,
      estado_envio: '60fdcbd6cb62f722031fa03d'
    };

    this.pedidoService.saveProducto(dataProducto).subscribe(
      (res: any) => {
        this.idProducto = res.message._id;
        dataPedido.articulo = this.idProducto;
      },
      (err) => {

      }
    );

    this.pedidoService.savePedido(dataPedido, this.token).subscribe(
      (res: any) => {
        this.idPedido = res.message._id;
        this.next();
      },
      (err) => {

      }
    );

  }

  public onValidarCliente(): void {

    let data = {
      _id: this.cedulaCliente
    };

    this.pedidoService.loginCliente(data).subscribe(
      (res: any) => {
        if (res.token !== undefined && res.token !== null) {
          this.token = res.token;
          
          this.next();
          this.next();
        }
      },
      (err) => {
        this.next();
      }
    );
  }

}
