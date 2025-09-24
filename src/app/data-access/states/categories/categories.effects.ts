import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CocktailsService } from '../../api/cocktails';
import * as actions from './categories.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private cocktailsService: CocktailsService
  ) {}

  getCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getCategories),
      mergeMap(({ }) =>
        this.cocktailsService.getAlcoholicFilterItems().pipe(
          map((response) =>
            actions.getCategoriesSuccess({
              CategoriesFilterItems: response
            })
          ),
          catchError((error) =>
            of(
              actions.getCategoriesFailure({
                error: error
              })
            )
          )
        )
      )
    )
  );
}