import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/config/config";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private server = config;

  constructor(
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
  saveProducto(data: any) {    
    return this.http.post(`${this.server.urlICake}/crearProducto`, data );
  }

  //login cliente
  loginCliente(data: any) {
    return this.http.post(`${this.server.urlICake}/cliente/login`, data);
  }

  //crear cliente. Guardar id de cliente
  crearCliente(data: any) {
    return this.http.post(`${this.server.urlICake}/cliente`, data);
  }

  public getAllClientes(token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.server.urlICake}/clientes`, { 'headers': headers });
  }

  public getClienteById(id: string, token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get(`${this.server.urlICake}/cliente/${id}`, { 'headers': headers });
  }

  //getAllEstados
  getAllEstados() {
    return this.http.get(`${this.server.urlICake}/estadosPedido`);
  }

  //mostrar Resumen del Pedido


  savePedido(data: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)
    return this.http.post(`${this.server.urlICake}/pedidos`, data, { 'headers': headers });
  }






}