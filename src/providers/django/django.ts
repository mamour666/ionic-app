import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API:any="http://192.168.1.92:8000/api/product/";

@Injectable()
export class DjangoProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DjangoProvider Provider');
  }

   

  getProduct(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    headers.append('Authorization','JWT');
    return this.http.get(API);
  }

}
