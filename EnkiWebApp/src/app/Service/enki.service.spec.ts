import { TestBed } from '@angular/core/testing';

import { EnkiService } from './enki.service';

describe('EnkiService', () => {
  let service: EnkiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnkiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
