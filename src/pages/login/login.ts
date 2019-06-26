import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DjangoProvider } from '../../providers/django/django';
import { Product } from '../../models/interface-products';
import { AboutPage } from '../about/about';
import { ImageViewerController } from 'ionic-img-viewer';

//import {CrudProvider} from '../../providers/crud';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
 article:Product[];
 public token:any;
 public allProduct:any;
 items: any;
 result: JSON;
 allData: any;
 finaldata:any;
 consturl:any = "http://192.168.1.92:8000";

  constructor(public navCtrl: NavController,public imageviewer:ImageViewerController,
    private djangoprovider:DjangoProvider) {
     
    this.article = [
      {
        title : 'infinix',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur deserunt sed animi tempore consectetur excepturi recusandae porro ipsam minima expedita iure dolore non, id earum qui, adipisci alias dicta.',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'5',
        averageStar:4,
        availability:{
          available:true,
          type:'Livraison',
          feed:10
        },
       pictures :[
          'assets/imgs/product2/hot-7-pro_1.png',
        ]
      },
      {
        title : 'Huawei mate 20',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur deserunt sed animi tempore consectetur excepturi recusandae porro ipsam minima expedita iure dolore non, id earum qui, adipisci alias dicta.',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'4',
        averageStar:4,
        availability:{
          available:true,
          type:'Livraison',
          feed:10
        },
       pictures :[
          'assets/imgs/product3/huawei-mate-20-pro-2018.png',
        ]
      },
      {
        title : 'huawei p20 pro',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur deserunt sed animi tempore consectetur excepturi recusandae porro ipsam minima expedita iure dolore non, id earum qui, adipisci alias dicta.',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'3',
        averageStar:4,
        availability:{
          available:true,
          type:'Disponible en Magasin',
        },
       pictures :[
          'assets/imgs/product4/huawei-p20-pro-600x600.png',
        ]
      },
      {
        title : 'iPhone 7 Plus',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur deserunt sed animi tempore consectetur excepturi recusandae porro ipsam minima expedita iure dolore non, id earum qui, adipisci alias dicta.',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'2',
        averageStar:4,
        availability:{
          available:true,
          type:'Disponible en Magasin',
        },
       pictures :[
          'assets/imgs/product5/iPhone_7_Plus_-_32_GO_-_RAM_2GO_-_12MP_3_3.jpg',
        ]
      },
      {
        title : 'jacket',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequuntur deserunt sed animi tempore consectetur excepturi recusandae porro ipsam minima expedita iure dolore non, id earum qui, adipisci alias dicta.',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'1',
        averageStar:4,
        availability:{
          available:true,
          type:'Disponible en Magasin',
        },
       pictures :[
          'assets/imgs/product1/presto1.jpg',
          'assets/imgs/product1/presto2.jpg',
          'assets/imgs/product1/presto3.jpg',
          'assets/imgs/product1/presto4.jpg',
        ]
      },

    ]
  }

  ionViewDidLoad(){
    this.djangoprovider.getProduct()
    .subscribe(productList=>{
      this.allProduct = productList;
      this.items = JSON.stringify(this.allProduct);
      this.allData = JSON.parse(this.items);
      console.log(this.allData['objects']);
      this.finaldata = this.allData['objects'];
    });

  }

  showDetails(finaldata:any):void{
    this.navCtrl.push(AboutPage,{data:finaldata});
  }

  showImage(picture:any,event):void{
    event.stopPropagation();
    this.imageviewer.create(picture).present();
  }










}
