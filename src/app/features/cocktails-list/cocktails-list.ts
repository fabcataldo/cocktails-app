import { Component } from '@angular/core';
import { CocktailsListPageFacade } from './services/cocktails-list-page-facade';

@Component({
  selector: 'app-cocktails-list',
  imports: [],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.scss',
  providers: [CocktailsListPageFacade]
})
export class CocktailsList {

}
