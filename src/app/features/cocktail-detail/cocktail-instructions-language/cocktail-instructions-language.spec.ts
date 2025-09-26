import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailInstructionsLanguage } from './cocktail-instructions-language';

describe('CocktailInstructionsLanguage', () => {
  let component: CocktailInstructionsLanguage;
  let fixture: ComponentFixture<CocktailInstructionsLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailInstructionsLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocktailInstructionsLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
