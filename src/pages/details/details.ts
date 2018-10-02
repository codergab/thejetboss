import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HirePage } from '../hire/hire';
import { StatusBar } from '@ionic-native/status-bar';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  pageTitle: string;
  imgSrc: string = '';
  description:string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.pageTitle = navParams.get('pageTitle');
  	this.imgSrc = navParams.get('imageUrl');
  	this.description = navParams.get('description');
  }
  reachUs() {
    this.navCtrl.push(HirePage);
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DetailsPage');
  }

}
