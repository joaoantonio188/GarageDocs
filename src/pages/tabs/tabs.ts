import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { CadastroPage } from '../cadastro/cadastro';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = HomePage;
  tab3Root = CadastroPage;

  constructor() {

  }
}
