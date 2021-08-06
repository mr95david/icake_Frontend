import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/config/config";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private server = config; 

  constructor (
    private http: HttpClient
  ) {

  }

  getPedidoById(id:any) {
    return this.http.get(`${this.server.urlICake}/pedido/${id}`);
  }

}