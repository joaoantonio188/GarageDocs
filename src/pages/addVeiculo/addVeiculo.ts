import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'page-addVeiculo',
  templateUrl: 'addVeiculo.html'
})
export class AddVeiculoPage {

  formDadosVeiculo: FormGroup

  constructor(public fb: FormBuilder, public navCtrl: NavController) {
    this.formDadosVeiculo = fb.group({
      tipoVeiculo: [null,[Validators.required]],
      modelo: [null,[Validators.required]],
      marca: [null,[Validators.required]],
      placa: [null,[Validators.required]],
      ano: [null,[Validators.required, Validators.minLength(8)]],
      descricao: [null,[Validators.required, Validators.minLength(11)]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  enviarDados(){
    console.log(this.formDadosVeiculo.value)
  }

}
