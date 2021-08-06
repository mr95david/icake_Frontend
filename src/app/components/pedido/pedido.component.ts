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
  public opciones: any[][] = [
    /* [{'name': 'Pequeño', 'value': 1}, {'name': 'Mediano', 'value': 2}, {'name': 'Grande', 'value': 5}],
    [{'name': 'Vainilla', 'value': 1}, {'name': 'Chocolate', 'value': 2}, {'name': 'Fresa', 'value': 3}, {'name': 'Fruto Rojos', 'value': 5}, {'name': 'Brownie', 'value': 7}],
    [{'name': 'Cobertura 1', 'value': 2}, {'name': 'Cobertura 2', 'value': 4}, {'name': 'Cobertura 3', 'value': 6}] */
  ];
  public position: number = 0;
  private priceTamaño: number = 0;
  private priceSabor: number = 0;
  private priceCobertura: number = 0;
  public priceTotal: number = 0;
  public backup!: number;
  private pedidoToSave: Pedido;

  constructor(
    private elementRef: ElementRef,
    private pedidoService: PedidoService
  ) {
    this.getTamaños();
  }

  public ngOnInit(): void {
    this.step = 0;
  
    this.titles = [
      "Escoge el tamaño de tu torta", 
      "Escoge el sabor de tu torta", 
      "Escoge la cobertura de tu torta",
      "Escribe aquí tu mensaje",
      "¿Estás registrado?",
      "Datos del cliente" 
    ];
    this.priceTotal = 0;
  }

  private getTamaños() {
    this.pedidoService.getAllTamaños().subscribe(
      (res: any) => {
        this.opciones[1] = new Array(res.length).fill({'id': '', 'name': '', 'value': ''});

        this.opciones[1] = res.map((item) => {
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
    
    if (this.position <5) {
      this.position++;
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

  public onSelect(value: number): void {
    
    if (this.position === 0) {
      this.priceTamaño = value;
    } else if (this.position === 1) {
      this.priceSabor = value;
    } else if (this.position === 2) {
      this.priceCobertura = value;
    }
    
    this.priceTotal = this.priceTamaño + this.priceSabor + this.priceCobertura;
  }

}
