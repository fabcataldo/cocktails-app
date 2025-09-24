export interface CocktailFilterAPIResponseItem {
    strDrink:      string;
    strDrinkThumb: string;
    idDrink:       string;
}

export interface CocktailFilterAPIResponse {
    drinks: CocktailFilterAPIResponseItem[];
}
