export enum CocktailFiltersIdEnum {
    'Alcoholic' = 'a',
    'Category' = 'c',
    'Ingredient' = 'i',
    'Glass' = 'g',
    'Name' = 'n'
}

export interface CocktailFilter {
    id: CocktailFiltersIdEnum,
    name: string
}