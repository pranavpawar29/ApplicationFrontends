import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  url = "https://jsonplaceholder.typicode.com/posts";

  constructor(public http :HttpClient) { }

  get() : Observable<Data[]> {
    return this.http.get<Data[]>(this.url).pipe(
      map(d => d)
    );
  }
}


export class Data{
  constructor(
    public userId : number,
    public id : number,
    public title : string,
    public body : string
  ){}
}
