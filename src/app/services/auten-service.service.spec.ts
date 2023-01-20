import { TestBed } from '@angular/core/testing';

import { AutenServiceService } from './auten-service.service';

describe('AutenServiceService', () => {
  let service: AutenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
