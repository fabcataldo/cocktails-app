import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CocktailsListPageFacade } from './features/cocktails-list/services/cocktails-list-page-facade';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    CocktailsListPageFacade
  ]
})
export class App {
  private readonly cocktailsListPageFacade = inject(CocktailsListPageFacade);
  public router = inject(Router);

  constructor() {
    this.cocktailsListPageFacade.setRandomCocktailSuscription();

    effect(() => {
      const cocktail = this.cocktailsListPageFacade.randomCocktail();
      if (cocktail) {
        this.router.navigate(['/detail', cocktail.id]);
        this.cocktailsListPageFacade.randomCocktail.set(null);
      }
    });
  }

  goToRandomCocktailPage(){
    this.cocktailsListPageFacade.getRandomCocktail();
  }
}
