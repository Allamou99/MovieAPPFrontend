import { TestBed } from '@angular/core/testing';

import { ProcessHttpErrorsService } from './process-http-errors.service';

describe('ProcessHttpErrorsService', () => {
  let service: ProcessHttpErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessHttpErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
