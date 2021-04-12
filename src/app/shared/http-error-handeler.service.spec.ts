import { TestBed } from '@angular/core/testing';

import { HttpErrorHandelerService } from './http-error-handeler.service';

describe('HttpErrorHandelerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpErrorHandelerService = TestBed.get(HttpErrorHandelerService);
    expect(service).toBeTruthy();
  });
});
