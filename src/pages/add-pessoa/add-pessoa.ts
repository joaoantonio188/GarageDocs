import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-add-pessoa',
  templateUrl: 'add-pessoa.html',
})
export class AddPessoaPage {

  formDadosPessoa: FormGroup

  constructor(public fb: FormBuilder, public navCtrl: NavController) {
    this.formDadosPessoa = fb.group({
      nome: [null,[Validators.required]],
      cpf: [null,[Validators.required]],
      telefone: [null,[Validators.required]],
      rua: [null,[Validators.required]],
      numeroRua: [null,[Validators.required,]],
      bairro: [null,[Validators.required,]],
      complemento: [null,[Validators.required]]
    })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPessoaPage');
  }

}
