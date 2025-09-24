import { createReducer, on } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';
import * as actions from './glasses.actions';

export interface GlassesState {
  GlassesFilterItems: filter[] | null;
  error: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: GlassesState = {
  GlassesFilterItems: null,
  error: null,
  loading: false,
  loaded: false
};

export const glassesReducer = createReducer(
  initialState,
  on(actions.init, (state) => ({
    ...state,
    GlassesFilterItems: null,
    error: null,
    loading: false,
    loaded: false
  })),
  on(actions.getGlasses, (state) => ({
    ...state,
    loading: true,
    error: null,
    GlassesFilterItems: null,
    loaded: false
  })),
  on(actions.getGlassesSuccess, (state, { GlassesFilterItems }) => ({
    ...state,
    loading: false,
    error: null,
    GlassesFilterItems,
    loaded: true
  })),
on(actions.getGlassesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    loaded: false
  })),
);