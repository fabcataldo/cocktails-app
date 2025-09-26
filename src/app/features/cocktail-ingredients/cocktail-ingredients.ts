import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IngredientWithMeasure } from '../../data-access/interfaces';

@Component({
  selector: 'app-cocktail-ingredients',
  imports: [TableModule],
  templateUrl: './cocktail-ingredients.html',
  styleUrl: './cocktail-ingredients.scss',
})
export class CocktailIngredients implements OnInit{
  private config = inject(DynamicDialogConfig);
  ingredientsWithMeasures: IngredientWithMeasure[] = [];

  ngOnInit(): void {
    this.ingredientsWithMeasures = this.config.data.ingredientsWithMeasures;
  }
}
