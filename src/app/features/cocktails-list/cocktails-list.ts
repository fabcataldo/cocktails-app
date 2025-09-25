import { Component, inject, OnInit } from '@angular/core';
import { CocktailsListPageFacade } from './services/cocktails-list-page-facade';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { Cocktail } from '../../data-access/interfaces';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-cocktails-list',
  imports: [TableModule, MultiSelectModule, TagModule],
  templateUrl: './cocktails-list.html',
  styleUrl: './cocktails-list.scss',
  providers: [CocktailsListPageFacade]
})
export class CocktailsList implements OnInit {
  public readonly pageFacade = inject(CocktailsListPageFacade);
  public columns: any[] = [];
  public skeletonRows = Array(10).fill(null).map((_, index) => ({
      id: `skeleton-${index}`,
      name: '',
      category: '',
      alcoholic: false,
      glass: '',
      instructions: {
        instructionsEN: '',
        instructionsES: null,
        instructionsDE: null,
        instructionsFR: null,
        instructionsIT: null,
        instructionsZH_HANS: null,
        instructionsZH_HANT: null,
      },
      thumbnail: '/assets/skeleton-image.png', // O una imagen placeholder
      ingredients: [],
      measures: [],
      ingredientsWithMeasures: [],
      dateModified: '',
    } as Cocktail));

  ngOnInit(): void {
    this.pageFacade.init();
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
}
