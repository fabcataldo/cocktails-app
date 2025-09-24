import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CocktailsService } from '../../api/cocktails';
import * as actions from './glasses.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class GlassesEffects {
  constructor(
    private actions$: Actions,
    private cocktailsService: CocktailsService
  ) {}

  getGlasses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getGlasses),
      mergeMap(({ }) =>
        this.cocktailsService.getAlcoholicFilterItems().pipe(
          map((response) =>
            actions.getGlassesSuccess({
              GlassesFilterItems: response
            })
          ),
          catchError((error) =>
            of(
              actions.getGlassesFailure({
                error: error
              })
            )
          )
        )
      )
    )
  );
}