import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController, AlertOptions } from 'ionic-angular';
import { itemCart } from '../../models/interface-itemCart';
import {Storage} from '@ionic/storage'


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartItems:itemCart[];
  total:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController,
    public storage:Storage,public toast:ToastController,public alertctrl:AlertController) {
  }

  closeModal():void{
     this.viewctrl.dismiss()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.storage.get("Cart")
    .then((data:itemCart[])=>{
      this.cartItems = data;
      this.cartItems.forEach((element:itemCart)=>{
        this.total += (element.item.price * element.qty);
      })
    })
    .catch(err=>{
      console.log("Erreur",err);
    })
  }

  removeItem(article:itemCart,index:number):void{
    let options : AlertOptions = {
      title:"Attention",
      subTitle:"Ete vous sur de vouloir supprimer ?",
      buttons:[
        {
          text:"Annuler",
          role:"cancel"
        },
        {
          text:"Retirer",
          handler :()=>{
            let price :number = article.item.price;
            let qty:number = article.qty;
            let mytotal :number = price*qty;
            this.cartItems.splice(index,1);
    this.storage.set("Cart",this.cartItems)
    .then((data)=>{
      this.total -= mytotal;
      this.toast.create({
        message:"Article retire du panier",
        duration:1000
      }).present();
    })
          }

        }


      ]
    }
    this.alertctrl.create(options).present();


  }

}
