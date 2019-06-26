import { Component } from '@angular/core';
import { NavController, NavParams,Events, ToastController,ToastOptions, ModalController } from 'ionic-angular';
import { Product } from '../../models/interface-products';
import { Storage } from '@ionic/storage';
import { itemCart } from '../../models/interface-itemCart';
import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

 
  productDetails:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public event:Events,
    public storage:Storage,public toast:ToastController,public modal:ModalController ) {
    this.productDetails = this.navParams.get("data");
    console.log(this.productDetails);
    event.subscribe('star-rating:changed', (starRating) => {console.log(starRating)});
  }

  addToCart(productDetails:any):void{
     let added:boolean=false;
     //si le panier est vide
     this.storage.get("Cart").then((data:itemCart[])=>{
       if(data === null || data.length === 0){
         data = [];
         data.push({
           item:productDetails,
           qty:1,
           amount:productDetails.price
         })
       }
       else{
         //si le pamier nest pas vide
         for(let i=0; i<data.length;i++){
           const element:itemCart = data[i];
           if(productDetails.id === element.item.id){
             element.qty += 1;
             element.amount += productDetails.price;
             added = true;
           }
         }
         if(!added){
           // le panier nest vide et ne contient pas l'article
           data.push({
             item:productDetails,
             qty:1,
             amount:productDetails.price
           })
         }
       }
       this.storage.set("Cart",data).then(data=>{
          let options:ToastOptions = {
            message:"Votre panier a ete mise a jour",
            duration:1500,
            showCloseButton:true,
            closeButtonText:"Fermer",
          };
          this.toast.create(options).present();
       }).catch(err=>{
         console.log("Erreur",err);
       })

     })
   }

   openCart():void{
    this.modal.create(CartPage).present();
   }


}
