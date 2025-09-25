import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CocktailsService } from '../../api/cocktails';
import * as actions from './cocktails.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CocktailsEffects {
  private readonly actions$ = inject(Actions);
  private readonly cocktailsService = inject(CocktailsService);

  getCocktailsByLetterOrName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getCocktailsByLetterOrName),
      mergeMap(({ text }) =>
        this.cocktailsService.getCocktailsByLetterOrName(text).pipe(
          map((response) =>
            actions.getCocktailsByLetterOrNameSuccess({
              cocktailsByLetterOrName: response
            })
          ),
          catchError((error) =>
            of(
              actions.getCocktailsByLetterOrNameFailure({
                error: error
              })
            )
          )
        )
      )
    )
  );

  getCocktailsByFilter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getCocktailsByFilter),
      mergeMap(({ filter }) =>
        this.cocktailsService.getCocktailsByFilter(filter).pipe(
          map((response) =>
            actions.getCocktailsByFilterSuccess({
              cocktailsByFilter: response
            })
          ),
          catchError((error) =>
            of(
              actions.getCocktailsByFilterFailure({
                error: error
              })
            )
          )
        )
      )
    )
  );
}