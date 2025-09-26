import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { CocktailFacade } from '../../../data-access/states/cocktail/cocktail.facade';
import { Cocktail, Language } from '../../../data-access/interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class CocktailDetailPageFacade {
  private cocktailFacade = inject(CocktailFacade);
  private destroyRef = inject(DestroyRef);

  public cocktail = signal<Cocktail | null>(null);
  public loading = signal<boolean>(false);
  public loaded = signal<boolean>(false);
  public translatedInstructions = signal<string | null>(null);

  init() {
    this.cocktailFacade.init();

    this.cocktailFacade.cocktail$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.cocktail.set(res);
          this.translatedInstructions.set(
            this.getInstruction(Language.ES)!
          );
        },
        error: (err) => {
          console.log(err);
        }
      })
    
    this.cocktailFacade.language$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (language) => {
          this.translatedInstructions.set(
            this.getInstruction(language)!
          );
        }
      })
  }

  setCocktailId(id: number) {
    this.cocktailFacade.setCocktailId(id);
  }

  getCocktail(id: number){
    this.cocktailFacade.getCocktail(id);
  }

  changePageLanguague(language: string){
    this.cocktailFacade.changeLanguage(language);
  }
  
  private getInstruction(language: string){
    switch(language){
      case Language.EN:
        return this.cocktail()?.instructions!.EN
      case Language.DE:
        return this.cocktail()?.instructions!.DE
      case Language.FR:
        return this.cocktail()?.instructions!.FR
      case Language.IT:
        return this.cocktail()?.instructions!.IT
      case Language['ZH-HANS']:
        return this.cocktail()?.instructions!.ZH_HANS
      case Language['ZH-HANT']:
        return this.cocktail()?.instructions!.ZH_HANT
      default:
        return this.cocktail()?.instructions!.ES
    }
  }
}
