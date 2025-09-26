import { Cocktail, CocktailAlcoholicEnum, CocktailApiItem, CocktailFilterAPIResponseItem } from "../interfaces";

export function processCocktailByFilter(cocktail: CocktailFilterAPIResponseItem): Cocktail{
  return {
    id: cocktail.idDrink,
    thumbnail: cocktail.strDrinkThumb,
    name: cocktail.strDrink
  }
}

export function processCocktail(cocktail: CocktailApiItem): Cocktail {

  const ingredients = [
    cocktail.strIngredient1, cocktail.strIngredient2, cocktail.strIngredient3,
    cocktail.strIngredient4, cocktail.strIngredient5, cocktail.strIngredient6,
    cocktail.strIngredient7, cocktail.strIngredient8, cocktail.strIngredient9,
    cocktail.strIngredient10, cocktail.strIngredient11, cocktail.strIngredient12,
    cocktail.strIngredient13, cocktail.strIngredient14, cocktail.strIngredient15
  ].filter(ingredient => ingredient !== null) as string[];

  const measures = [
    cocktail.strMeasure1, cocktail.strMeasure2, cocktail.strMeasure3,
    cocktail.strMeasure4, cocktail.strMeasure5, cocktail.strMeasure6,
    cocktail.strMeasure7, cocktail.strMeasure8, cocktail.strMeasure9,
    cocktail.strMeasure10, cocktail.strMeasure11, cocktail.strMeasure12,
    cocktail.strMeasure13, cocktail.strMeasure14, cocktail.strMeasure15
  ].filter(measure => measure !== null) as string[];

  const ingredientsWithMeasures = ingredients.map((ingredient, index) => ({
    name: ingredient,
    measure: measures[index] || null
  }));

  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    category: cocktail.strCategory,
    alcoholic: cocktail.strAlcoholic === CocktailAlcoholicEnum.Alcoholic,
    glass: cocktail.strGlass,
    instructions: {
      EN: cocktail.strInstructions,
      ES: cocktail.strInstructionsES,
      DE: cocktail.strInstructionsDE,
      FR: cocktail.strInstructionsFR,
      IT: cocktail.strInstructionsIT,
      ZH_HANS: cocktail.strInstructionsZH_HANS,
      ZH_HANT: cocktail.strInstructionsZH_HANT
    },
    thumbnail: cocktail.strDrinkThumb,
    ingredients,
    measures,
    ingredientsWithMeasures,
    dateModified: cocktail.dateModified
  };
}