import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
    
  }

  login(credentials: any): Observable<boolean> {
    return this.http.post('/api/authenticate',JSON.stringify(credentials))
      .pipe(
        map((response: any) => {
          let result = response;
          if (result && result.token) {
            localStorage.setItem("token", result.token);
            return true;
          }
          return false;
        })
      );
  }

  logout(){
    localStorage.removeItem("token");
  }

  isLoggedIn(){
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem("token");
    return !jwtHelper.isTokenExpired(token);

    // let jwtHelper = new JwtHelperService();
    // let token = localStorage.getItem("token");
    // if(!token)
    //   return false;
    // let expiratoinDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);
    // console.log("Expiration:", expiratoinDate);
    // console.log("IsExpired:",isExpired);
    // return !isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem("token");
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }

}
