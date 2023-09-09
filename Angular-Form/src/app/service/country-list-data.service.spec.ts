import { TestBed } from '@angular/core/testing';

import { CountryListDataService } from './country-list-data.service';

describe('CountryListDataService', () => {
  let service: CountryListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
