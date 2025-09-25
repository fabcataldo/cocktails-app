import { createReducer, on } from '@ngrx/store';
import * as actions from './cocktail.actions';
import { Cocktail, Language } from '../../interfaces';

export interface CocktailState {
    cocktail: Cocktail | null;
    cocktailId: number;
    error: any;
    loading: boolean;
    loaded: boolean;
    language: string;
}

const initialState: CocktailState = {
    cocktail: null,
    error: null,
    loading: false,
    loaded: false,
    cocktailId: 0,
    language: Language.ES
};

export const cocktailReducer = createReducer(
    initialState,
    on(actions.init, (state) => ({
        ...state,
        CocktailFilterItems: null,
        error: null,
        loading: false,
        loaded: false,
        language: Language.ES
    })),
    on(actions.getCocktail, (state) => ({
        ...state,
        loading: true,
        error: null,
        cocktail: null,
        loaded: false
    })),
    on(actions.getCocktailSuccess, (state, { cocktail }) => ({
        ...state,
        loading: false,
        error: null,
        cocktail: cocktail,
        loaded: true
    })),
    on(actions.getCocktailFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
        loaded: false,
        CocktailByLetter: null
    })),
    on(actions.setCocktailId, (state, { id }) => ({
        ...state,
        cocktailId: id
    })),
    on(actions.changeLanguage, (state, { language }) => ({
        ...state,
        language: language
    })),
);