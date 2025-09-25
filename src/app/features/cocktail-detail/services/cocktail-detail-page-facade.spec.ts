import { TestBed } from '@angular/core/testing';

import { CocktailDetailPageFacade } from './cocktail-detail-page-facade';

describe('CocktailDetailPageFacade', () => {
  let service: CocktailDetailPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDetailPageFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
