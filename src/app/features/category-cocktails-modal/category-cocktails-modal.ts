import { Component, inject, OnInit, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Cocktail } from '../../data-access/interfaces';

@Component({
  selector: 'app-category-cocktails-modal',
  imports: [CarouselModule],
  templateUrl: './category-cocktails-modal.html',
  styleUrl: './category-cocktails-modal.scss'
})
export class CategoryCocktailsModal implements OnInit{
  cocktailsCategory = signal<Cocktail[]>([]);
  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);

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
    this.cocktailsCategory.set(this.config.data ?? []);
  }

  onCocktailClick(id: string){
    this.ref.close(id);
  }
}
