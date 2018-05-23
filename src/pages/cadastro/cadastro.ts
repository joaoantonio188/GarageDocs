import { AddPessoaPage } from './../add-pessoa/add-pessoa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddVeiculoPage } from '../addVeiculo/addVeiculo';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  transferirPaginaPessoa(){
    this.navCtrl.push(AddPessoaPage);
  }
  transferirPaginaVeiculo(){
    this.navCtrl.push(AddVeiculoPage);
  }
}
