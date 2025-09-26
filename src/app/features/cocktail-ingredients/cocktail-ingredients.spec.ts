import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailIngredients } from './cocktail-ingredients';

describe('CocktailIngredients', () => {
  let component: CocktailIngredients;
  let fixture: ComponentFixture<CocktailIngredients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailIngredients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailIngredients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
