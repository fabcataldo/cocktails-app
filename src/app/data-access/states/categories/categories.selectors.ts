import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesState } from './categories.reducer';

export const categoriesState = createFeatureSelector<CategoriesState>('Categories');

export const getCategoriesFilterItems = createSelector(
  categoriesState,
  (state) => state.CategoriesFilterItems
);

export const getLoaded = createSelector(
  categoriesState,
  (state) => state.loaded
);

export const getLoading = createSelector(
  categoriesState,
  (state) => state.loading
);

export const getError = createSelector(
  categoriesState,
  (state) => state.error
);