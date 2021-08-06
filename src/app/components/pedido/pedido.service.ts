import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/config/config";


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private server = config; 

  constructor (
    private http: HttpClient
  ) {

  }

  getAllTamaños() {
    return this.http.get(`${this.server.urlICake}/tamanos`);
  }

  getAllCoberturas() {
    return this.http.get(`${this.server.urlICake}/coberturas`);
  }

  getAllSabores() {
    return this.http.get(`${this.server.urlICake}/sabores`);
  }

  //saveProducto. Guardar id de producto

   //login cliente
  //crear cliente. Guardar id de cliente

  //getAllEstados

  
  savePedido(data: any) {
    return this.http.post(`/`, data);
  }

 




}