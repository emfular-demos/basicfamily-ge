import { TestBed } from '@angular/core/testing';

import { ElkLayoutingService } from './elk-layouting.service';

describe('ElkLayoutingService', () => {
  let service: ElkLayoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElkLayoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
