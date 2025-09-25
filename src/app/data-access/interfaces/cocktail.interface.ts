export interface Cocktail {
  id: string;
  name: string;
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: Instructions;
  thumbnail: string;
  ingredients: string[];
  measures: string[];
  ingredientsWithMeasures: Array<IngredientWithMeasure>;
  dateModified: string;
}

export interface Instructions {
  EN: string;
  ES: string | null;
  DE: string | null;
  FR: string | null;
  IT: string | null;
  ZH_HANS: string | null;
  ZH_HANT: string | null;  
}

interface IngredientWithMeasure {
  name: string;
  measure: string;
}