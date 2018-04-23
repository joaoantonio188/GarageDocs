import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddVeiculoPage } from '../pages/addVeiculo/addVeiculo';
import { SearchPage } from '../pages/search/search';
import { AngularFireModule } from "angularfire2";
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AddPessoaPage } from '../pages/add-pessoa/add-pessoa';


export const firebaseConfig = {
    apiKey: "AIzaSyDXGs6udxT4wkgKTmqP9HQxKjjHgSv5vzs",
    authDomain: "garagedocs-eeb21.firebaseapp.com",
    databaseURL: "https://garagedocs-eeb21.firebaseio.com",
    projectId: "garagedocs-eeb21",
    storageBucket: "",
    messagingSenderId: "958886778628"
}

@NgModule({
  declarations: [
    MyApp,
    AddVeiculoPage,
    SearchPage,
    HomePage,
    TabsPage,
    CadastroPage,
    AddPessoaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddVeiculoPage,
    SearchPage,
    HomePage,
    TabsPage,
    CadastroPage,
    AddPessoaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
