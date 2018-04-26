import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabaseModule, AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-teste-firebase',
  templateUrl: 'teste-firebase.html',
})

export class TesteFirebasePage {



  private veiculoCollection: AngularFirestoreCollection<any>;

  veiculos: AngularFireList<any>;


  constructor(db: AngularFirestore, private database: AngularFireDatabase) {
    this.veiculos = this.database.list('veiculo');
    
    
    // this.veiculos = db.collection('veiculo').valueChanges();

    console.log(this.veiculos)
  }

  addItem(){
    this.veiculos.push({
      "ano" : "2015",
      "descricao" : "Teste",
      "marca" : "k",
      "modelo" : "k",
      "placa" : "k",
      "tipoVeiculo" : "5"
      

    })
  }
}

