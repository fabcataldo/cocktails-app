import { Component, inject, model, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CocktailDetailPageFacade } from './services/cocktail-detail-page-facade';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {CommonModule} from "@angular/common";
import { CocktailsListPageFacade } from '../cocktails-list/services/cocktails-list-page-facade';
import { CocktailInstructionsLanguage } from './cocktail-instructions-language/cocktail-instructions-language';
import { CategoryCocktailsModalPageFacade } from '../category-cocktails-modal/services/category-cocktails-modal-page-facade';

@Component({
  selector: 'app-cocktail-detail',
  imports: [
    TableModule,
    ButtonModule,
    CommonModule,
    CocktailInstructionsLanguage
  ],
  templateUrl: './cocktail-detail.html',
  styleUrl: './cocktail-detail.scss',
  providers: [
    CocktailDetailPageFacade,
    CocktailsListPageFacade,
    CategoryCocktailsModalPageFacade
  ]
})
export class CocktailDetail implements OnInit {
  private route = inject(ActivatedRoute);
  public pageFacade = inject(CocktailDetailPageFacade);
  public cocktailsListPageFacade = inject(CocktailsListPageFacade);
  private router = inject(Router);
  private categoryCocktailsModalPageFacade = inject(CategoryCocktailsModalPageFacade);

  private readonly destroyRef = takeUntilDestroyed();
  public languague = model(false);

  ngOnInit(): void {   
    this.pageFacade.init();
    this.route.params
      .pipe(this.destroyRef)
      .subscribe({
        next: (params:any) => {
          const realId = Number(params['id']);

          this.categoryCocktailsModalPageFacade.init();

          this.pageFacade.setCocktailId(realId);
          this.pageFacade.getCocktail(realId);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  onLanguagueChange(language: string) {
    this.pageFacade.changePageLanguague(language);
  }

  goBack() {
    this.router.navigate(['/'])
  }
}
