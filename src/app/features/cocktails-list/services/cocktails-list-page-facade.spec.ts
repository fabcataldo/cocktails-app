import { TestBed } from '@angular/core/testing';

import { CocktailsListPageFacade } from './cocktails-list-page-facade';

describe('CocktailsListPageFacade', () => {
  let service: CocktailsListPageFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailsListPageFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
