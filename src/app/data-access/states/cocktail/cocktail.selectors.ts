import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CocktailState } from './cocktail.reducer';


export const cocktailsState = createFeatureSelector<CocktailState>('Cocktail');

export const getCocktail = createSelector(
  cocktailsState,
  (state) => state.cocktail
);

export const getLoaded = createSelector(
  cocktailsState,
  (state) => state.loaded
);

export const getLoading = createSelector(
  cocktailsState,
  (state) => state.loading
);

export const getError = createSelector(
  cocktailsState,
  (state) => state.error
);