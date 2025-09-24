import { CocktailApiItem } from "./cocktail-api-item.interface";

export interface CocktailApiResponse {
  drinks: CocktailApiItem[] | null;
}