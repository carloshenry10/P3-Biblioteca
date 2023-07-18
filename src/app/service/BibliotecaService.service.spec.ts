/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BibliotecaServiceService } from './BibliotecaService.service';

describe('Service: BibliotecaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibliotecaServiceService]
    });
  });

  it('should ...', inject([BibliotecaServiceService], (service: BibliotecaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
