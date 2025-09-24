import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CocktailsService } from '../../api/cocktails';
import * as actions from './alcoholics.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class AlcoholicsEffects {
  constructor(
    private actions$: Actions,
    private cocktailsService: CocktailsService
  ) {}

  getAlcoholics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getAlcoholics),
      mergeMap(({ }) =>
        this.cocktailsService.getAlcoholicFilterItems().pipe(
          map((response) =>
            actions.getAlcoholicsSuccess({
              alcoholicsFilterItems: response
            })
          ),
          catchError((error) =>
            of(
              actions.getAlcoholicsFailure({
                error: error
              })
            )
          )
        )
      )
    )
  );
}