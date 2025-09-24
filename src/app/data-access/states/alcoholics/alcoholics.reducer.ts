import { createReducer, on } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';
import * as actions from './alcoholics.actions';

export interface AlcoholicsState {
  alcoholicsFilterItems: filter[] | null;
  error: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: AlcoholicsState = {
  alcoholicsFilterItems: null,
  error: null,
  loading: false,
  loaded: false
};

export const alcoholicsReducer = createReducer(
  initialState,
  on(actions.init, (state) => ({
    ...state,
    alcoholicsFilterItems: null,
    error: null,
    loading: false,
    loaded: false
  })),
  on(actions.getAlcoholics, (state) => ({
    ...state,
    loading: true,
    error: null,
    alcoholicsFilterItems: null,
    loaded: false
  })),
  on(actions.getAlcoholicsSuccess, (state, { alcoholicsFilterItems }) => ({
    ...state,
    loading: false,
    error: null,
    alcoholicsFilterItems,
    loaded: true
  })),
on(actions.getAlcoholicsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    loaded: false
  })),
);