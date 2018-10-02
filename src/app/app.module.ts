import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer} from '@ionic-native/email-composer';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { FleetsPage } from '../pages/fleets/fleets';
import { AboutPage } from '../pages/about/about';
import { HirePage } from '../pages/hire/hire';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    FleetsPage,
    AboutPage,
    HirePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    FleetsPage,
    AboutPage,
    HirePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
