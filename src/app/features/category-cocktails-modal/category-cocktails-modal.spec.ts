import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCocktailsModal } from './category-cocktails-modal';

describe('CategoryCocktailsModal', () => {
  let component: CategoryCocktailsModal;
  let fixture: ComponentFixture<CategoryCocktailsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCocktailsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCocktailsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
