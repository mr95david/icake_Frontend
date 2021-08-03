import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
const API_HOST = 'https://icake-api.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getCoberturas () {
    return this.http.get(API_HOST+'coberturas')
  }
}