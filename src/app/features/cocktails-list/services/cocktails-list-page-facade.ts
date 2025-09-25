import { Injectable, OnDestroy, inject, signal } from '@angular/core';
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

  cocktailsByLetterOrName = signal<Cocktail[]>([]);
  loading = signal<boolean>(false);
  alcoholicNoAlcoholicCocktails = signal<{alcoholic: Cocktail[], nonAlcoholic: Cocktail[] }>({alcoholic: [], nonAlcoholic: []});
  
  filters = signal<any>([]);
  
  categoriesFilterItems = signal<filter[]>([]);
  glassesFilterItems = signal<filter[]>([]);
  ingredientsFilterItems = signal<filter[]>([]);
  alcoholicsFilterItems = signal<filter[]>([]);
  error = signal<any>(null);
  loaded = signal<boolean>(false);
  cocktailsByFilter: CocktailFilterAPIResponseItem[] | null = null;
  
  private subs = new Subscription();

  init(){
    this.cocktailsFacade.init();
    this.categoriesFacade.init();
    this.ingredientsFacade.init();
    this.glassesFacade.init();
    this.alcoholicsFacade.init();
    this.cocktailFacade.init();

    this.cocktailsFacade.getCocktailsByLetterOrName('a');
    this.categoriesFacade.getCategoriesFilterItems();
    this.ingredientsFacade.getIngredientsFilterItems();
    this.glassesFacade.getGlassesFilterItems();
    this.alcoholicsFacade.getAlcoholicsFilterItems();

    this.subs.add (
      this.cocktailsFacade.cocktailsByLetterOrName$!.subscribe(data => {
      if(data){
        this.cocktailsByLetterOrName.set(data);
        this.alcoholicNoAlcoholicCocktails.set({
          alcoholic: this.cocktailsByLetterOrName()!.filter(c => c.alcoholic),
          nonAlcoholic: this.cocktailsByLetterOrName()!.filter(c => !c.alcoholic)
        })
      }
    }));

    this.subs.add(
      this.categoriesFacade.categoriesFilterItems$.subscribe(data => {
        if(data){
          this.categoriesFilterItems.set(data);
        }
      })
    );

    this.subs.add(
      this.glassesFacade.glassesFilterItems$.subscribe(data => {
        if(data){
          this.glassesFilterItems.set(data);
        }
      })
    );

    this.subs.add(
      this.ingredientsFacade.ingredientsFilterItems$.subscribe(data => {
        if(data){
          this.ingredientsFilterItems.set(data);
        }
      })
    );

    this.subs.add(
      this.alcoholicsFacade.alcoholicsFilterItems$.subscribe(data => {
        if(data){
          this.alcoholicsFilterItems.set(data);
        }
      })
    );

    this.subs.add(
      this.cocktailsFacade.loading$.subscribe(data => {
        this.loading.set(data);
      })
    );

    this.subs.add(
      this.cocktailsFacade.loaded$.subscribe(data => {
        this.loaded.set(data);
      })
    );

    this.subs.add(
      this.cocktailsFacade.error$.subscribe(data => {
        this.error.set(data);
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

  searchByFilters(event: any){
    console.log('event searchbyfilters')
    console.log(event)

    if(event.filters?.length){
      //TODO: sólo implemento filtro de nombre, implementar el resto más adelante
      this.filters.set(event.filters)
       if(this.filters()[0].name.value > 3) {
          this.cocktailsFacade.getCocktailsByLetterOrName(this.filters()[0].name.value);
       } else {
          this.cocktailsFacade.getCocktailsByLetterOrName('a');
       }
    }   
  }
}
