import { createReducer, on } from '@ngrx/store';
import { filter } from '../../interfaces/filter.interface';
import * as actions from './categories.actions';

export interface CategoriesState {
  CategoriesFilterItems: filter[] | null;
  error: any;
  loading: boolean;
  loaded: boolean;
}

const initialState: CategoriesState = {
  CategoriesFilterItems: null,
  error: null,
  loading: false,
  loaded: false
};

export const categoriesReducer = createReducer(
  initialState,
  on(actions.init, (state) => ({
    ...state,
    CategoriesFilterItems: null,
    error: null,
    loading: false,
    loaded: false
  })),
  on(actions.getCategories, (state) => ({
    ...state,
    loading: true,
    error: null,
    CategoriesFilterItems: null,
    loaded: false
  })),
  on(actions.getCategoriesSuccess, (state, { CategoriesFilterItems }) => ({
    ...state,
    loading: false,
    error: null,
    CategoriesFilterItems,
    loaded: true
  })),
on(actions.getCategoriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    loaded: false
  })),
);