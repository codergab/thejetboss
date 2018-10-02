import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from "@ionic-native/status-bar";
/**
 * Generated class for the FleetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fleets',
  templateUrl: 'fleets.html',
})
export class FleetsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#F9AA33');
    this.statusBar.hide();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FleetsPage');
  }

}
