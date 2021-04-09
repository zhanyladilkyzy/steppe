import { TestBed } from '@angular/core/testing';

import { ArticleCanDeactivateGuardService } from './article-can-deactivate-guard.service';

describe('ArticleCanDeactivateGuardService', () => {
  let service: ArticleCanDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleCanDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
