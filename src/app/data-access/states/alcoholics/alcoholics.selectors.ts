import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AlcoholicsState } from './alcoholics.reducer';

export const alcoholicsState = createFeatureSelector<AlcoholicsState>('alcoholics');

export const getAlcoholicsFilterItems = createSelector(
  alcoholicsState,
  (state) => state.alcoholicsFilterItems
);

export const getLoaded = createSelector(
  alcoholicsState,
  (state) => state.loaded
);

export const getLoading = createSelector(
  alcoholicsState,
  (state) => state.loading
);

export const getError = createSelector(
  alcoholicsState,
  (state) => state.error
);