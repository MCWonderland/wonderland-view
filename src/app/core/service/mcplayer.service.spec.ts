import { TestBed } from '@angular/core/testing';

import { McplayerService } from './mcplayer.service';

describe('McplayerService', () => {
  let service: McplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
