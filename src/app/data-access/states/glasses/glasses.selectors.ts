import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlassesState } from './glasses.reducer';

export const glassesState = createFeatureSelector<GlassesState>('Glasses');

export const getGlassesFilterItems = createSelector(
  glassesState,
  (state) => state.GlassesFilterItems
);

export const getLoaded = createSelector(
  glassesState,
  (state) => state.loaded
);

export const getLoading = createSelector(
  glassesState,
  (state) => state.loading
);

export const getError = createSelector(
  glassesState,
  (state) => state.error
);