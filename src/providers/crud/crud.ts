import { Injectable } from '@angular/core';
//import {apiKey} from "../../app/apiurls/serverurls.js";
//import {Http,Headers,RequestOptions} from "@angular/http";
// import {Storage} from "@ionic/storage";
 //import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';


/*
  Generated class for the CrudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CrudProvider {

  constructor(public storage:Storage) {
    console.log('Hello CrudProvider Provider');
  }


  // getData(){


  //   return new Promise((resolve,reject)=>{


  //     let headers = new Headers();
  //     headers.append('Content-Type','application/json');
  //     headers.append('Authorization','JWT');


  //     this.http.get(apiKey+'/product/',{headers:headers})
  //     .map(res=>res.json())  // getData(){


  //   return new Promise((resolve,reject)=>{

  // getData(){


  //   return new Promise((resolve,reject)=>{


  //     let headers = new Headers();
  //     headers.append('Content-Type','application/json');
  //     headers.append('Authorization','JWT');
  // getData(){


  //   return new Promise((resolve,reject)=>{


  //     let headers = new Headers();
  //     headers.append('Content-Type','application/json');
  //     headers.append('Authorization','JWT');


  //     this.http.get(apiKey+'/product/',{headers:headers})
  //     .map(res=>res.json())
  //     .subscribe(data=>{
  //       resolve(data);
  //     },(err)=>{
  //       reject(err);
  //     });
  //   })
  // }

  //     this.http.get(apiKey+'/product/',{headers:headers})
  //     .map(res=>res.json())
  //     .subscribe(data=>{
  //       resolve(data);
  //     },(err)=>{
  //       reject(err);
  //     });
  //   })
  // }
  //     let headers = new Headers();
  //     headers.append('Content-Type','application/json');
  //     headers.append('Authorization','JWT');

  // getData(){


  //   return new Promise((resolve,reject)=>{


  //     let headers = new Headers();
  //     headers.append('Content-Type','application/json');
  //     headers.append('Authorization','JWT');


  //     this.http.get(apiKey+'/product/',{headers:headers})
  //     .map(res=>res.json())
  //     .subscribe(data=>{
  //       resolve(data);
  //     },(err)=>{
  //       reject(err);
  //     });
  //   })
  // }
  //     this.http.get(apiKey+'/product/',{headers:headers})
  //     .map(res=>res.json())
  //     .subscribe(data=>{
  //       resolve(data);
  //     },(err)=>{
  //       reject(err);
  //     });
  //   })
  // }
  //     .subscribe(data=>{
  //       resolve(data);
  //     },(err)=>{
  //       reject(err);
  //     });
  //   })
  // }

}
