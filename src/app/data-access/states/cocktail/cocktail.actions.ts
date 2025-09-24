import { createAction, props } from '@ngrx/store';
import { Cocktail, CocktailFilterAPIResponseItem } from '../../interfaces';
import { CocktailFilter } from '../../interfaces/cocktail-filters-id.enum';

export const init = createAction(
    '[Cocktail/API] init',
);

export const getCocktail = createAction(
    '[Cocktail/API] getCocktail',
    props<{id: number}>()
);

export const getCocktailSuccess = createAction(
    '[Cocktail/API] getCocktail Success',
    props<{cocktail: Cocktail}>()
);

export const getCocktailFailure = createAction(
    '[Cocktail/API] getCocktail Failure',
    props<{error: any}>()
);

export const setCocktailId  = createAction(
    '[Cocktail/API] setCocktailId',
    props<{id: number}>()
);