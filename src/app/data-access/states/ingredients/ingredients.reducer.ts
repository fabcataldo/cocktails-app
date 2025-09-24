import { createReducer, on } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';
import * as actions from './ingredients.actions';

export interface IngredientsState {
  IngredientsFilterItems: filter[] | null;
  error: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: IngredientsState = {
  IngredientsFilterItems: null,
  error: null,
  loading: false,
  loaded: false
};

export const ingredientsReducer = createReducer(
  initialState,
  on(actions.init, (state) => ({
    ...state,
    IngredientsFilterItems: null,
    error: null,
    loading: false,
    loaded: false
  })),
  on(actions.getIngredients, (state) => ({
    ...state,
    loading: true,
    error: null,
    IngredientsFilterItems: null,
    loaded: false
  })),
  on(actions.getIngredientsSuccess, (state, { IngredientsFilterItems }) => ({
    ...state,
    loading: false,
    error: null,
    IngredientsFilterItems,
    loaded: true
  })),
on(actions.getIngredientsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    loaded: false
  })),
);