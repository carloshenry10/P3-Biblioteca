/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LivroServiceService } from './LivroService.service';

describe('Service: LivroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivroServiceService]
    });
  });

  it('should ...', inject([LivroServiceService], (service: LivroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
