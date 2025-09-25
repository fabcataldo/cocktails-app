export interface Cocktail {
  id: string;
  name: string;
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: {
    instructionsEN: string;
    instructionsES: string | null;
    instructionsDE: string | null;
    instructionsFR: string | null;
    instructionsIT: string | null;
    instructionsZH_HANS: string | null;
    instructionsZH_HANT: string | null;
  };
  thumbnail: string;
  ingredients: string[];
  measures: string[];
  ingredientsWithMeasures: Array<{
    name: string;
    measure: string;
  }>;
  dateModified: string;
}