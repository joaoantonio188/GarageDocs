import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from "angularfire2";

export class Veiculo{
  id: string;
  dono: string;
  modelo: string;
}


@Component({
  selector: 'page-addVeiculo',
  templateUrl: 'addVeiculo.html'
})
export class AddVeiculoPage {

  constructor(public navCtrl: NavController) {

  }
 
  lista: FirebaseListObservable<any>;
  carro: Veiculo;
}
