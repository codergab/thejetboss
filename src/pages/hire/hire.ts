import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../home/home';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-hire',
  templateUrl: 'hire.html',
})
export class HirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public statusBar: StatusBar, public dialer: CallNumber, public alert: AlertController, public emailComposer: EmailComposer) {
  	// console.log(navParams.get('pagetitle'));
  }

  openChat() {
    window.open(`https://wa.me/2348038265802?text=I'm%20interested%20in%20your%20helicopter%20services`,'_system','',true);
    // window.open
  }

  openDialer() {
    this.dialer.callNumber('+2348038265802',true)
    .then()
    .catch(err => {
      let eroor = this.alert.create({
        title: 'Error',
        message: err,
        buttons: ['OK']
      });
      eroor.present().then(() => this.navCtrl.push(HirePage));
    })
  }

  openMail() {
    let email = {
      to: 'book@thejetboss.com',
      subject: 'theJetBoss - New Interest on Helicopter Service',
      body: `<p>Hello, I'll like to know more about your helicopter services.</p> <p>Thank You</p>`,
      isHtml: true
    };
 
    this.emailComposer.open(email);
  }

  backHome() {
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    // this.statusBar.hide();
    console.log('ionViewDidLoad HirePage');
  }

}
