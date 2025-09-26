import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CocktailsState } from './cocktails.reducer';

export const cocktailsState = createFeatureSelector<CocktailsState>('cocktails');

export const getCocktailsByLetterOrName = createSelector(
  cocktailsState,
  (state) => state.cocktailsByLetterOrName
);

export const getCocktailsByFilter = createSelector(
  cocktailsState,
  (state) => state.cocktailsByFilter
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

export const getRandomCocktail = createSelector(
  cocktailsState,
  (state) => state.randomCocktail
)