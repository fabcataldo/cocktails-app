import { createReducer, on } from '@ngrx/store';
import * as actions from './cocktails.actions';
import { Cocktail } from '../../interfaces';

export interface CocktailsState {
    cocktailsByLetterOrName: Cocktail[];
    cocktailsByFilter: Cocktail[] | undefined;
    error: any;
    loading: boolean;
    loaded: boolean;
    selectedCocktailsCategory: string | null;
    randomCocktail: Cocktail | null;
    loadedCocktailsByFilter: boolean;
}

const initialState: CocktailsState = {
    cocktailsByLetterOrName: [],
    cocktailsByFilter: undefined,
    error: null,
    loading: false,
    loaded: false,
    selectedCocktailsCategory: null,
    randomCocktail: null,
    loadedCocktailsByFilter: false
};

export const cocktailsReducer = createReducer(
    initialState,
    on(actions.init, (state) => ({
        ...state,
        cocktailsByLetterOrName: [],
        cocktailsByFilter: undefined,
        error: null,
        loading: false,
        loaded: false,
        randomCocktail: null,
        selectedCocktailsCategory: null,
        loadedCocktailsByFilter: false
    })),
    on(actions.getCocktailsByLetterOrName, (state) => ({
        ...state,
        loading: true,
        error: null,
        cocktailsByLetterOrName: [],
        loaded: false,
        selectedCocktailsCategory: null
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
        cocktailsByLetterOrName: []
    })),
    on(actions.getCocktailsByFilter, (state) => ({
        ...state,
        loading: true,
        error: null,
        cocktailsByFilter: [],
        loadedCocktailsByFilter: false
    })),
    on(actions.getCocktailsByFilterSuccess, (state, { cocktailsByFilter }) => ({
        ...state,
        loading: false,
        error: null,
        cocktailsByFilter: cocktailsByFilter,
        loadedCocktailsByFilter: false
    })),
    on(actions.getCocktailsByFilterFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
        cocktailsByFilter: [],
        loadedCocktailsByFilter: false
    })),
    on(actions.setSelectedCocktailsCategory, (state, { category }) => ({
        ...state,
        selectedCocktailsCategory: category,
    })),
    on(actions.getRandomCocktail, (state) => ({
        ...state,
        randomCocktail: null
    })),
    on(actions.getRandomCocktailSuccess, (state, { cocktail }) => ({
        ...state,
        randomCocktail: cocktail
    })),
    on(actions.getRandomCocktailFailure, (state, { error }) => ({
        ...state,
        error,
        randomCocktail: null
    })),
);