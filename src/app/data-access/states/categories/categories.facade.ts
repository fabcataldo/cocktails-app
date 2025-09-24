import { inject, Injectable } from '@angular/core'; 
import { select, Store } from '@ngrx/store'; 
import * as actions from './categories.actions';
import * as selectors from './categories.selectors';

@Injectable() 
export class CategoriesFacade {  
  private readonly store = inject(Store);

  public categoriesFilterItems$ = this.store.pipe(select(selectors.getCategoriesFilterItems));
  public loading$ = this.store.pipe(select(selectors.getLoading));
  public loaded$ = this.store.pipe(select(selectors.getLoaded));
  public error$ = this.store.pipe(select(selectors.getError));

  init() {
    this.store.dispatch(actions.init());  
  }

  getCategoriesFilterItems() {
    this.store.dispatch(actions.getCategories());   
  }    
}