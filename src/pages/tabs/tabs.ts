import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { AddVeiculoPage } from '../addVeiculo/addVeiculo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = HomePage;
  tab3Root = AddVeiculoPage;

  constructor() {

  }
}
