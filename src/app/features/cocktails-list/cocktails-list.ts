import { Component, inject, OnInit } from '@angular/core';
import { CocktailsListPageFacade } from './services/cocktails-list-page-facade';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { Cocktail } from '../../data-access/interfaces';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CocktailIngredients } from '../cocktail-ingredients/cocktail-ingredients';
import { CommonModule } from '@angular/common';
import { CategoryCocktailsModalPageFacade } from '../category-cocktails-modal/services/category-cocktails-modal-page-facade';

@Component({
  selector: 'app-cocktails-list',
  imports: [TableModule, MultiSelectModule, TagModule, CommonModule],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.scss',
  providers: [
    CocktailsListPageFacade,
    CategoryCocktailsModalPageFacade
  ]
})
export class CocktailsList implements OnInit {
  public readonly pageFacade = inject(CocktailsListPageFacade);
  public router = inject(Router);
  private readonly dialogService = inject(DialogService);
  public categoryCocktailsModalPageFacade = inject(CategoryCocktailsModalPageFacade);

  public columns: any[] = [];
  public skeletonRows = Array(10).fill(null).map((_, index) => ({
      id: `skeleton-${index}`,
      name: '',
      category: '',
      alcoholic: false,
      glass: '',
      instructions: {
        EN: '',
        ES: null,
        DE: null,
        FR: null,
        IT: null,
        ZH_HANS: null,
        ZH_HANT: null,
      },
      thumbnail: '',
      ingredients: [],
      measures: [],
      ingredientsWithMeasures: [],
      dateModified: '',
    } as Cocktail));
  private ref?: DynamicDialogRef;

  ngOnInit(): void {
    this.pageFacade.init();
    this.categoryCocktailsModalPageFacade.init();

    this.loadColumns();
  }

  loadColumns(): void {
    this.columns = [
      {
        field: 'id',
        header: 'Cocktail ID',
        show: true,
        exportable: false,
      },
      {
        field: 'thumbnail',
        header: 'Image',
        show: true,
        exportable: false,
      },
      {
        field: 'name',
        header: 'Name',
        show: true,
        exportable: false,
      },
      {
        field: 'category',
        header: 'Category',
        show: true,
        exportable: false,
      },
      {
        field: 'id',
        header: 'ID',
        show: true,
        exportable: false,
      },
      {
        field: 'alcoholic',
        header: 'Alcoholic',
        show: true,
        exportable: false,
      },
      {
        field: 'ingredients',
        header: 'Ingredients',
        show: true,
        exportable: false,
      },
      {
        field: 'dateModified',
        header: 'Last Update',
        show: true,
        exportable: false,
      },
    ]
  }

  goToDetailPage(id: string){
    this.router.navigate([`/detail`, id]);
  }

  showCocktailIngredientsModal(cocktail: Cocktail) {
    this.ref = this.dialogService.open(CocktailIngredients, {
        header: `Ingredients of "${cocktail.name}"`,
        width: '50vw',
        modal:true,
        breakpoints: {
            '960px': '75vw',
            '640px': '90vw'
        },
        closable: true,
        closeOnEscape: true,
        dismissableMask: true,
        data: {
          ingredientsWithMeasures: cocktail.ingredientsWithMeasures
        }
    })!;
  }

  openCocktailsCategoryModal(category: string) {
    this.categoryCocktailsModalPageFacade.prepareCategoryCocktailsModal(category);
  }

}
