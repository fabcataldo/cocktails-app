import { inject, Injectable } from '@angular/core'; 
import { select, Store } from '@ngrx/store'; 
import * as actions from './cocktail.actions';
import * as selectors from './cocktail.selectors';
import { Observable } from 'rxjs';
import { Cocktail } from '../../interfaces';
import { setCocktailId } from './cocktail.actions';

@Injectable() 
export class CocktailFacade {
  private readonly store = inject(Store);

  public cocktail$ = this.store.pipe(select(selectors.getCocktail));
  public loading$ = this.store.pipe(select(selectors.getLoading));
  public loaded$ = this.store.pipe(select(selectors.getLoaded));
  public error$ = this.store.pipe(select(selectors.getError));

  init() {
    this.store.dispatch(actions.init());  
  }

  getCocktail(id: number) {
    this.store.dispatch(actions.getCocktail({id}));
  } 

  setCocktailId(id: number) {
    this.store.dispatch(actions.setCocktailId({id}));
  }
}