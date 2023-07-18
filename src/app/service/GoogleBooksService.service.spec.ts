/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleBooksServiceService } from './GoogleBooksService.service';

describe('Service: GoogleBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBooksServiceService]
    });
  });

  it('should ...', inject([GoogleBooksServiceService], (service: GoogleBooksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
