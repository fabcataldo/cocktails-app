import { inject, Injectable } from '@angular/core'; 
import { select, Store } from '@ngrx/store'; 
import * as actions from './glasses.actions';
import * as selectors from './glasses.selectors';
import { Observable } from 'rxjs';
import { filter } from '../../interfaces/filter.interface';

@Injectable() 
export class GlassesFacade {
  private readonly store = inject(Store);

  public glassesFilterItems$ = this.store.pipe(select(selectors.getGlassesFilterItems));
  public loading$ = this.store.pipe(select(selectors.getLoading));
  public loaded$ = this.store.pipe(select(selectors.getLoaded));
  public error$ = this.store.pipe(select(selectors.getError));

  init() {
    this.store.dispatch(actions.init());  
  }

  getGlassesFilterItems() {
    this.store.dispatch(actions.getGlasses());   
  }    
}