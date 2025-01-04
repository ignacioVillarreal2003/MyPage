import { TestBed } from '@angular/core/testing';

import { BackgroundDetectorService } from './background-detector.service';

describe('BackgroundDetectorService', () => {
  let service: BackgroundDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
