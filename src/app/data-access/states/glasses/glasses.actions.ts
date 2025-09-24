import { createAction, props } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';

export const init = createAction(
    '[Glasses/API] init',
)

export const getGlasses = createAction(
    '[Glasses/API] getGlasses',
)

export const getGlassesSuccess = createAction(
    '[Glasses/API] getGlasses Success',
    props<{ GlassesFilterItems: filter[] }>()
)

export const getGlassesFailure = createAction(
    '[Glasses/API] getGlasses Failure',
    props<{ error: any }>()
)