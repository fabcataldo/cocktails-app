import { createAction, props } from '@ngrx/store';
import { Cocktail, CocktailFilterAPIResponseItem } from '../../interfaces';
import { CocktailFilter } from '../../interfaces/cocktail-filters-id.enum';

export const init = createAction(
    '[Cocktails/API] init',
);

export const getCocktailsByLetterOrName = createAction(
    '[Cocktails/API] getCocktailsByLetterOrName',
    props<{text: string}>()
);

export const getCocktailsByLetterOrNameSuccess = createAction(
    '[Cocktails/API] getCocktailsByLetterOrName Success',
    props<{cocktailsByLetterOrName: Cocktail[]}>()
);

export const getCocktailsByLetterOrNameFailure = createAction(
    '[Cocktails/API] getCocktailsByLetterOrName Failure',
    props<{error: any}>()
);

export const getCocktailsByFilter = createAction(
    '[Cocktails/API] getCocktailsByLetter',
    props<{filter: CocktailFilter}>()
);

export const getCocktailsByFilterSuccess = createAction(
    '[Cocktails/API] getCocktailsByFilter Success',
    props<{cocktailsByFilter: CocktailFilterAPIResponseItem[]}>()
);

export const getCocktailsByFilterFailure = createAction(
    '[Cocktails/API] getCocktailsByFilter Failure',
    props<{error: any}>()
);
 