import { createAction, props } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';

export const init = createAction(
    '[Categories/API] init',
)

export const getCategories = createAction(
    '[Categories/API] getCategories',
)

export const getCategoriesSuccess = createAction(
    '[Categories/API] getCategories Success',
    props<{ CategoriesFilterItems: filter[] }>()
)

export const getCategoriesFailure = createAction(
    '[Categories/API] getCategories Failure',
    props<{ error: any }>()
)