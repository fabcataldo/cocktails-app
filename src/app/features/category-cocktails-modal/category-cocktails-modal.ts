import { Component, inject, OnInit } from '@angular/core';
import { CocktailsListPageFacade } from '../cocktails-list/services/cocktails-list-page-facade';
import { CarouselModule } from 'primeng/carousel';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-category-cocktails-modal',
  imports: [CarouselModule],
  templateUrl: './category-cocktails-modal.html',
  styleUrl: './category-cocktails-modal.scss',
  providers: [CocktailsListPageFacade]
})
export class CategoryCocktailsModal implements OnInit{
  public cocktailsListPageFacade = inject(CocktailsListPageFacade);
  private ref = inject(DynamicDialogRef);

  responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
    },
  ];

  ngOnInit(): void {
    this.cocktailsListPageFacade.setCocktailsByFilterSuscription();
  }

  onCocktailClick(id: string){
    this.ref.close(id);
  }
}
