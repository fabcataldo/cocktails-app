import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { isDevMode } from '@angular/core';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { alcoholicsReducer } from './data-access/states/alcoholics/alcoholics.reducer';
import { provideEffects } from '@ngrx/effects';
import { AlcoholicsEffects } from './data-access/states/alcoholics/alcoholics.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools'; 
import { AlcoholicsFacade } from './data-access/states/alcoholics/alcoholics.facade';
import { categoriesReducer } from './data-access/states/categories/categories.reducer';
import { glassesReducer } from './data-access/states/glasses/glasses.reducer';
import { ingredientsReducer } from './data-access/states/ingredients/ingredients.reducer';
import { CategoriesEffects } from './data-access/states/categories/categories.effects';
import { GlassesEffects } from './data-access/states/glasses/glasses.effects';
import { IngredientsEffects } from './data-access/states/ingredients/ingredients.effects';
import { cocktailsReducer } from './data-access/states/cocktails/cocktails.reducer';
import { CocktailsEffects } from './data-access/states/cocktails/cocktails.effects';
import { CategoriesFacade } from './data-access/states/categories/categories.facade';
import { GlassesFacade } from './data-access/states/glasses/glasses.facade';
import { IngredientsFacade } from './data-access/states/ingredients/ingredients.facade';
import { CocktailsFacade } from './data-access/states/cocktails/cocktails.facade';
import { CocktailEffects } from './data-access/states/cocktail/cocktail.effects';
import { CocktailFacade } from './data-access/states/cocktail/cocktail.facade';
import { provideHttpClient } from '@angular/common/http';
import { cocktailReducer } from './data-access/states/cocktail/cocktail.reducer';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      alcoholics: alcoholicsReducer,
      categories: categoriesReducer,
      glasses: glassesReducer,
      ingredients: ingredientsReducer,
      cocktails: cocktailsReducer,
      cocktail: cocktailReducer
    }),
    provideEffects([
      AlcoholicsEffects,
      CategoriesEffects,
      GlassesEffects,
      IngredientsEffects,
      CocktailsEffects,
      CocktailEffects
    ]),
    (isDevMode() ? [provideStoreDevtools({ maxAge: 25 })] : []),
    provideAnimations(),

    AlcoholicsFacade,
    CategoriesFacade,
    GlassesFacade,
    IngredientsFacade,
    CocktailsFacade,
    CocktailFacade
  ],
};
