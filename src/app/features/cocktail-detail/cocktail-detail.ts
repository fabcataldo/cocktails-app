import { Component, inject, model, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CocktailDetailPageFacade } from './services/cocktail-detail-page-facade';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Language } from '../../data-access/interfaces';
import {CommonModule} from "@angular/common";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CategoryCocktailsModal } from '../category-cocktails-modal/category-cocktails-modal';
import { CocktailsListPageFacade } from '../cocktails-list/services/cocktails-list-page-facade';
import { setSelectedCocktailsCategory } from '../../data-access/states/cocktails/cocktails.actions';
import { CocktailFilter, CocktailFiltersIdEnum } from '../../data-access/interfaces/cocktail-filters-id.enum';

@Component({
  selector: 'app-cocktail-detail',
  imports: [TableModule, ButtonModule, CommonModule],
  templateUrl: './cocktail-detail.html',
  styleUrl: './cocktail-detail.scss',
  providers: [
    CocktailDetailPageFacade,
    DialogService,
    CocktailsListPageFacade
  ]
})
export class CocktailDetail implements OnInit {
  private route = inject(ActivatedRoute);
  public pageFacade = inject(CocktailDetailPageFacade);
  private readonly dialogService = inject(DialogService);
  private cocktailsListPageFacade = inject(CocktailsListPageFacade);

  private readonly destroyRef = takeUntilDestroyed();
  public languague = model(false);
  private ref: DynamicDialogRef | undefined;

  public availableLanguagues = Language;

  ngOnInit(): void {   
    this.pageFacade.init();
    this.route.params
      .pipe(this.destroyRef)
      .subscribe({
        next: (params:any) => {
          const realId = Number(params['id']);
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

  showCategoryCocktailsModal() {
    this.cocktailsListPageFacade.selectCocktailsCategory(this.pageFacade.cocktail()?.category!);
    this.cocktailsListPageFacade.getCocktailsByFilter(
      {
        id: CocktailFiltersIdEnum.Category,
        name: this.pageFacade.cocktail()?.category!
      }
    );
    this.ref = this.dialogService.open(CategoryCocktailsModal, {
        header: `Cocktails of "${this.pageFacade.cocktail()?.category}" Category`,
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
    });

    this.ref.onClose.subscribe((cocktailId: string) => {
        const realId = Number(cocktailId);
        if (realId) {
          this.pageFacade.setCocktailId(realId);
          this.pageFacade.getCocktail(realId);
        }
    });
  }

}
