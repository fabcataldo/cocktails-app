import { createAction, props } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';

export const init = createAction(
    '[Ingredients/API] init',
)

export const getIngredients = createAction(
    '[Ingredients/API] getIngredients',
)

export const getIngredientsSuccess = createAction(
    '[Ingredients/API] getIngredients Success',
    props<{ IngredientsFilterItems: filter[] }>()
)

export const getIngredientsFailure = createAction(
    '[Ingredients/API] getIngredients Failure',
    props<{ error: any }>()
)