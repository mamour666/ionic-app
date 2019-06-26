import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';HttpClientModule
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { LoginPage } from '../pages/login/login';
import { StarRatingModule } from 'ionic3-star-rating';
import { MenuPage } from '../pages/menu/menu';
import { IonicStorageModule } from '@ionic/storage';
import { CartPage } from '../pages/cart/cart';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { CrudProvider } from '../providers/crud/crud';
import { DjangoProvider } from '../providers/django/django';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
    MenuPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    LoginPage,
    MenuPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CrudProvider,
    DjangoProvider,
  ]
})
export class AppModule {}
