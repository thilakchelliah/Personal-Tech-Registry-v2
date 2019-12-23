import { TestBed } from '@angular/core/testing';

import { BlogManagerService } from './blog-manager.service';

describe('BlogManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogManagerService = TestBed.get(BlogManagerService);
    expect(service).toBeTruthy();
  });
});
