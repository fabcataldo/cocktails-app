import { AlcoholicApiResponse, IngredientApiResponse, GlassApiResponse, CategoryApiResponse, CocktailFiltersIdEnum } from "../interfaces";
import { filter } from "../interfaces/filter.interface";

export function processFilter(
    filterType: CocktailFiltersIdEnum,
    filterApiResponse: AlcoholicApiResponse |
        IngredientApiResponse | GlassApiResponse | CategoryApiResponse
): filter[]{
    return filterApiResponse.drinks.map((item, index) => {
         let name = '';
        
        switch (filterType) {
            case CocktailFiltersIdEnum.Alcoholic:
                name = (item as AlcoholicApiResponse['drinks'][0]).strAlcoholic;
                break;
            case CocktailFiltersIdEnum.Category:
                name = (item as CategoryApiResponse['drinks'][0]).strCategory;
                break;
            case CocktailFiltersIdEnum.Glass:
                name = (item as GlassApiResponse['drinks'][0]).strGlass;
                break;
            case CocktailFiltersIdEnum.Ingredient:
                name = (item as IngredientApiResponse['drinks'][0]).strIngredient1;
                break;
        }

        return { id: index, name };
    })
}