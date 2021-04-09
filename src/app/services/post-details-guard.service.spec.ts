import { TestBed } from '@angular/core/testing';

import { PostDetailsGuardService } from './post-details-guard.service';

describe('PostDetailsGuardService', () => {
  let service: PostDetailsGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailsGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
