import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Category } from '../../models/interface-category';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage:any;
  categories:Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = LoginPage;
    this.categories = [
      {
        title:"Vetements",
        description:"description",
        icon:"shirt",
      },
      {
        title:"Electroniques",
        description:"description",
        icon:"phoe-portrait",
      },
      {
        title:"Mode & Accessoires",
        description:"description",
        icon:"bowtie",
      },
      {
        title:"Chaussures",
        description:"description",
        icon:"archive",
      },
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
