import { inject, Injectable } from '@angular/core'; 
import { select, Store } from '@ngrx/store'; 
import * as actions from './ingredients.actions';
import * as selectors from './ingredients.selectors';
import { Observable } from 'rxjs';
import { filter } from '../../interfaces/filter.interface';

@Injectable() 
export class IngredientsFacade {
  private readonly store = inject(Store);

  public ingredientsFilterItems$ = this.store.pipe(select(selectors.getIngredientsFilterItems));
  public loading$ = this.store.pipe(select(selectors.getLoading));
  public loaded$ = this.store.pipe(select(selectors.getLoaded));
  public error$ = this.store.pipe(select(selectors.getError));

  init() {
    this.store.dispatch(actions.init());  
  }

  getIngredientsFilterItems() {
    this.store.dispatch(actions.getIngredients());   
  }    
}