import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { config } from "src/app/config/config";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private server = config; 

  constructor (
    private http: HttpClient
  ) {

  }

  sendMail(body:any) {
    return this.http.post(`${this.server.urlICake}/enviarEmail`,body);
  }

}