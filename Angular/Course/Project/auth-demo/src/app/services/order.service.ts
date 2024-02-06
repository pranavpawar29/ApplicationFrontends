import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(){
    let token = localStorage.getItem('token');
    const headers =new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('/api/orders', {headers})
    .pipe(map(response => response));
  }
  // getOrders(){
  //   let token = localStorage.getItem('token');
  //   let headers = new HttpHeaders({'Authorization' : 'Bearer ' + token});
  //   console.log(headers.get('Authorization'));
  //   const options = {headers: headers};
  //   return this.http.get('/api/orders', options )
  //   .pipe(map(response => response));
  // }
}

