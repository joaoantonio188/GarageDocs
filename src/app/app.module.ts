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
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AddPessoaPage } from '../pages/add-pessoa/add-pessoa';
import { TesteFirebasePage } from '../pages/teste-firebase/teste-firebase';


import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { firebaseConfig } from '../enviroment/firebaseConfig';




@NgModule({
  declarations: [
    MyApp,
    AddVeiculoPage,
    SearchPage,
    HomePage,
    TabsPage,
    CadastroPage,
    AddPessoaPage,
    TesteFirebasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.firebase, 'garagedocs'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddVeiculoPage,
    SearchPage,
    HomePage,
    TabsPage,
    CadastroPage,
    AddPessoaPage,
    TesteFirebasePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
