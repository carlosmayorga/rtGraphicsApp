import { TestBed } from '@angular/core/testing';

import { FirebaseGotyService } from './firebase-goty.service';

describe('FirebaseGotyService', () => {
  let service: FirebaseGotyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseGotyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
