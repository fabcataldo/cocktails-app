import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './cocktail.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CocktailsService } from "../../api/cocktails";

@Injectable()
export class CocktailEffects {
  constructor(
    private actions$: Actions,
    private cocktailsService: CocktailsService
  ) {}

  getCocktail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getCocktail),
      mergeMap(({ id }) =>
        this.cocktailsService.getCocktailDetail(id).pipe(
          map((response) =>
            actions.getCocktailSuccess({
              cocktail: response
            })
          ),
          catchError((error) =>
            of(
              actions.getCocktailFailure({
                error: error
              })
            )
          )
        )
      )
    )
  );
}