import { inject, Injectable } from '@angular/core'; 
import { select, Store } from '@ngrx/store'; 
import * as actions from './alcoholics.actions';
import * as selectors from './alcoholics.selectors';

@Injectable() 
export class AlcoholicsFacade {
  private readonly store = inject(Store);

  public alcoholicsFilterItems$ = this.store.pipe(select(selectors.getAlcoholicsFilterItems));
  public loading$ = this.store.pipe(select(selectors.getLoading));
  public loaded$ = this.store.pipe(select(selectors.getLoaded));
  public error$ = this.store.pipe(select(selectors.getError));
 
  init() {
    this.store.dispatch(actions.init());  
  }

  getAlcoholicsFilterItems() {
    this.store.dispatch(actions.getAlcoholics());   
  }    
}