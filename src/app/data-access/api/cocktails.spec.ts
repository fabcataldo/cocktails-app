import { TestBed } from '@angular/core/testing';

import { Cocktails } from './cocktails';

describe('Cocktails', () => {
  let service: Cocktails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cocktails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
