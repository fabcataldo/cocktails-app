import { createReducer, on } from '@ngrx/store';
import * as actions from './cocktails.actions';
import { Cocktail, CocktailFilterAPIResponseItem } from '../../interfaces';

export interface CocktailsState {
    cocktailsByLetterOrName: Cocktail[] | null;
    cocktailsByFilter: CocktailFilterAPIResponseItem[] | null;
    error: any;
    loading: boolean;
    loaded: boolean;
}

const initialState: CocktailsState = {
    cocktailsByLetterOrName: null,
    cocktailsByFilter: null,
    error: null,
    loading: false,
    loaded: false
};

export const cocktailsReducer = createReducer(
    initialState,
    on(actions.init, (state) => ({
        ...state,
        CocktailsFilterItems: null,
        error: null,
        loading: false,
        loaded: false
    })),
    on(actions.getCocktailsByLetterOrName, (state) => ({
        ...state,
        loading: true,
        error: null,
        cocktailsByLetterOrName: null,
        loaded: false
    })),
    on(actions.getCocktailsByLetterOrNameSuccess, (state, { cocktailsByLetterOrName }) => ({
        ...state,
        loading: false,
        error: null,
        cocktailsByLetterOrName: cocktailsByLetterOrName,
        loaded: true
    })),
    on(actions.getCocktailsByLetterOrNameFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
        loaded: false,
        cocktailsByLetter: null
    })),
    on(actions.getCocktailsByFilter, (state) => ({
        ...state,
        loading: true,
        error: null,
        cocktailsByFilter: null,
        loaded: false
    })),
    on(actions.getCocktailsByFilterSuccess, (state, { cocktailsByFilter }) => ({
        ...state,
        loading: false,
        error: null,
        cocktailsByFilter: cocktailsByFilter,
        loaded: true
    })),
    on(actions.getCocktailsByFilterFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
        loaded: false,
        cocktailsByLetter: null
    })),
);