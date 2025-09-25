import { createAction, props } from '@ngrx/store';
import { Cocktail, Language } from '../../interfaces';

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
    '[Cocktail/Page] setCocktailId',
    props<{id: number}>()
);

export const changeLanguage = createAction(
    '[Cocktail/Page] change Language',
    props<{language: string}>()
)