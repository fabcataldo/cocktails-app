import { createAction, props } from '@ngrx/store';
import { CocktailApiResponse } from '../../interfaces/cocktail-api-response.interface';

export const getCocktailsByLetter = createAction(
    '[Cocktails/API] getCocktailsByLetter',
)

export const getCocktailsByLetterSuccess = createAction(
    '[Cocktails/API] getCocktailsByLetter',
    props<{cocktailsApiResponse: CocktailApiResponse}>()
)

export const getCocktailsByLetterFailure = createAction(
    '[Cocktails/API] getCocktailsByLetter',
    props<{error: any}>()
)