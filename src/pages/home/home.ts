import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  article:any;

  constructor(public navCtrl: NavController) {
    this.article = [
      {
        title : 'infinix',
        description:'loremp upbtgffffffffffffffffffffffffffffffffffffffffffffffffx',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'2',
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
        description:'loremp upbtgffffffffffffffffffff',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'1',
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
        description:'loremp upbtgffffffffffffffffffffffffffffffffffffffffffffffffx',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'1',
        averageStar:4,
        availability:{
          available:true,
          type:'Livraison',
          feed:10
        },
       pictures :[
          'assets/imgs/product4/huawei-p20-pro-600x600.png',
        ]
      },
      {
        title : 'iPhone 7 Plus',
        description:'loremp upbtgffffffffffffffffffffffffffffffffffffffffffffffffx',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'1',
        averageStar:4,
        availability:{
          available:true,
          type:'Livraison',
          feed:10
        },
       pictures :[
          'assets/imgs/product5/iPhone_7_Plus_-_32_GO_-_RAM_2GO_-_12MP_3_3.jpg',
        ]
      },
      {
        title : 'jacket',
        description:'loremp ipsum de fkvpngrnggeofe oej4fivn def5vjfo rpk rgrgkr ',
        price:45,
        category:'vetements',
        createdAt: new Date(),
        state:'Neuf',
        city:'londres',
        id:'1',
        averageStar:4,
        availability:{
          available:true,
          type:'Livraison',
          feed:10
        },
       pictures :[
          'assets/imgs/product1/iphone-x-final.png',
        ]
      },

    ]

  }

  goAbout() {
    this.navCtrl
    .push( AboutPage,{ name:'Urbano',age:22 } );
  }

}
