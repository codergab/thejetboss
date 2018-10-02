import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { FleetsPage } from '../fleets/fleets';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageBg = true;
  constructor(public navCtrl: NavController, statusBar: StatusBar, splashScreen: SplashScreen) {
    // statusBar.overlaysWebView(false);
    statusBar.backgroundColorByHexString('#000000');
    splashScreen.hide();
    
  }

  hire(pageTitle: string,imgUrl: string, desc:string ) {
    this.navCtrl.push(DetailsPage, {
      pageTitle: pageTitle,
      imageUrl: imgUrl,
      description: desc
    });
  }

  openFleetPage() {
    this.navCtrl.push(FleetsPage);
  }

}
