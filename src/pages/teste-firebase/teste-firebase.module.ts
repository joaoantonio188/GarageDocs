import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TesteFirebasePage } from './teste-firebase';

@NgModule({
  declarations: [
    TesteFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(TesteFirebasePage),
  ],
})
export class TesteFirebasePageModule {}
