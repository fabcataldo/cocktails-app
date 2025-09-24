import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IngredientsState } from './ingredients.reducer';

export const ingredientsState = createFeatureSelector<IngredientsState>('Ingredients');

export const getIngredientsFilterItems = createSelector(
  ingredientsState,
  (state) => state.IngredientsFilterItems
);

export const getLoaded = createSelector(
  ingredientsState,
  (state) => state.loaded
);

export const getLoading = createSelector(
  ingredientsState,
  (state) => state.loading
);

export const getError = createSelector(
  ingredientsState,
  (state) => state.error
);