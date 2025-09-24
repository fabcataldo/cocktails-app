import { Injectable } from '@angular/core'; 
import { select, Store } from '@ngrx/store'; 
import * as actions from './alcoholics.actions';
import * as selectors from './alcoholics.selectors';
import { Observable } from 'rxjs';
import { filter } from '../../interfaces/filter.interface';

@Injectable() 
export class AlcoholicsFacade {  
  public alcoholicsFilterItems$: Observable<filter[] | null> | null = null;
  public loading$: Observable<boolean> | null = null;
  public loaded$: Observable<boolean> | null = null;
  public error$: Observable<any> | null = null;
 
  constructor(private readonly store: Store) {}  

  init() {     
    this.alcoholicsFilterItems$ = this.store.pipe(select(selectors.getAlcoholicsFilterItems));
    this.loading$ = this.store.pipe(select(selectors.getLoading));
    this.loaded$ = this.store.pipe(select(selectors.getLoaded));
    this.error$ = this.store.pipe(select(selectors.getError));

    this.store.dispatch(actions.init());  
  }

  getAlcoholicsFilterItems() {
    this.store.dispatch(actions.getAlcoholics());   
  }    
}