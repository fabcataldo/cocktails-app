import { inject, Injectable } from '@angular/core'; 
import { select, Store } from '@ngrx/store'; 
import * as actions from './cocktails.actions';
import * as selectors from './cocktails.selectors';
import { CocktailFilter } from '../../interfaces';

@Injectable() 
export class CocktailsFacade {
  private readonly store = inject(Store);

  public cocktailsByLetterOrName$ = this.store.pipe(select(selectors.getCocktailsByLetterOrName));
  public cocktailsByFilter$ = this.store.pipe(select(selectors.getCocktailsByFilter));
  public loading$ = this.store.pipe(select(selectors.getLoading));
  public loaded$ = this.store.pipe(select(selectors.getLoaded));
  public error$ = this.store.pipe(select(selectors.getError));
  public randomCocktail$ = this.store.pipe(select(selectors.getRandomCocktail));
  public selectedCocktailsCategory$ = this.store.pipe(select(selectors.getSelectedCocktailsCategory));

  init() {
    this.store.dispatch(actions.init());  
  }

  getCocktailsByLetterOrName(text: string) {
    this.store.dispatch(actions.getCocktailsByLetterOrName({text}));   
  }

  getCocktailsByFilter(filter: CocktailFilter) {
    this.store.dispatch(actions.getCocktailsByFilter({filter}));   
  }

  selectCocktailsCategory(category: string){
    this.store.dispatch(actions.setSelectedCocktailsCategory({category}));   
  }

  getRandomCocktail() {
    this.store.dispatch(actions.getRandomCocktail());
  }
}