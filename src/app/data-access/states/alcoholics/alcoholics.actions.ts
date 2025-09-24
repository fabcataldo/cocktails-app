import { createAction, props } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';

export const init = createAction(
    '[Alcoholics/API] init',
)

export const getAlcoholics = createAction(
    '[Alcoholics/API] getAlcoholics',
)

export const getAlcoholicsSuccess = createAction(
    '[Alcoholics/API] getAlcoholics Success',
    props<{ alcoholicsFilterItems: filter[] }>()
)

export const getAlcoholicsFailure = createAction(
    '[Alcoholics/API] getAlcoholics Failure',
    props<{ error: any }>()
)