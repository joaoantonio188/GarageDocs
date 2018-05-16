import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { EditarveiculoComponent } from '../../components/editar-veiculo/editar-veiculo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private veiculoCollection: AngularFirestoreCollection<any>;
  public veiculo: Observable<any[]>;

  constructor(
    public db: AngularFirestore,
    public navCtrl: NavController,
    public modal: ModalController) {
    this.veiculoCollection = db.collection<any>('veiculo');
    this.veiculo = this.veiculoCollection.valueChanges();
  }

  addveiculo(){
    this.navCtrl.push('CriarVeiculoPage')
  }

  deleteveiculo(id){
    this.veiculoCollection.doc(id).delete();
  }

  editveiculo(veiculo){
    console.log(veiculo)
    const AlterarveiculoModal = this.modal.create(EditarveiculoComponent, {veiculo: veiculo});
    AlterarveiculoModal.present();
  }
}
