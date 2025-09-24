import { Injectable, OnDestroy, inject } from '@angular/core';
import { Cocktail, CocktailFilter, CocktailFilterAPIResponseItem } from '../../../data-access/interfaces';
import { CocktailsFacade } from '../../../data-access/states/cocktails/cocktails.facade';
import { AlcoholicsFacade } from '../../../data-access/states/alcoholics/alcoholics.facade';
import { GlassesFacade } from '../../../data-access/states/glasses/glasses.facade';
import { IngredientsFacade } from '../../../data-access/states/ingredients/ingredients.facade';
import { CategoriesFacade } from '../../../data-access/states/categories/categories.facade';
import { CocktailFacade } from '../../../data-access/states/cocktail/cocktail.facade';
import { Subscription } from 'rxjs';
import { filter } from '../../../data-access/interfaces/filter.interface';

@Injectable()
export class CocktailsListPageFacade implements OnDestroy {
  private cocktailsFacade = inject(CocktailsFacade);
  private alcoholicsFacade = inject(AlcoholicsFacade);
  private glassesFacade = inject(GlassesFacade);
  private ingredientsFacade = inject(IngredientsFacade);
  private categoriesFacade = inject(CategoriesFacade);
  private cocktailFacade = inject(CocktailFacade);

  cocktailsByLetterOrName: Cocktail[] | null = null;
  cocktailsByFilter: CocktailFilterAPIResponseItem[] | null = null;
  error: any = null
  loading = false;
  loaded = false;
  categoriesFilterItems: filter[] | null = null;
  glassesFilterItems: filter[] | null = null;
  ingredientsFilterItems: filter[] | null = null;
  alcoholicsFilterItems: filter[] | null = null;
  
  private subs = new Subscription();

  init(){
    this.cocktailsFacade.init();
    this.categoriesFacade.init();
    this.ingredientsFacade.init();
    this.glassesFacade.init();
    this.alcoholicsFacade.init();
    this.cocktailFacade.init();

    this.subs = this.cocktailsFacade.cocktailsByLetterOrName$!.subscribe(data => {
      if(data){
        this.cocktailsByLetterOrName = data;
      }
    });

    this.subs.add(
      this.categoriesFacade.categoriesFilterItems$.subscribe(data => {
        if(data){
          this.categoriesFilterItems = data;
        }
      })
    );

    this.subs.add(
      this.glassesFacade.glassesFilterItems$.subscribe(data => {
        if(data){
          this.glassesFilterItems = data;
        }
      })
    );

    this.subs.add(
      this.ingredientsFacade.ingredientsFilterItems$.subscribe(data => {
        if(data){
          this.ingredientsFilterItems = data;
        }
      })
    );

    this.subs.add(
      this.alcoholicsFacade.alcoholicsFilterItems$.subscribe(data => {
        if(data){
          this.alcoholicsFilterItems = data;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setCocktailId(id: number){
    this.cocktailFacade.setCocktailId(id);
  }

  getCocktailsByLetterOrName(text: string){
    this.cocktailsFacade.getCocktailsByLetterOrName(text);
  }

  getCocktailsByFilter(filter: CocktailFilter){
    this.cocktailsFacade.getCocktailsByFilter(filter);
  }
}
