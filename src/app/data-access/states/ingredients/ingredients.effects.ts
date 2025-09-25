import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CocktailsService } from '../../api/cocktails';
import * as actions from './ingredients.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class IngredientsEffects {
  private readonly actions$ = inject(Actions);
  private readonly cocktailsService = inject(CocktailsService);

  getIngredients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getIngredients),
      mergeMap(({ }) =>
        this.cocktailsService.getIngredientsFilterItems().pipe(
          map((response) =>
            actions.getIngredientsSuccess({
              IngredientsFilterItems: response
            })
          ),
          catchError((error) =>
            of(
              actions.getIngredientsFailure({
                error: error
              })
            )
          )
        )
      )
    )
  );
}