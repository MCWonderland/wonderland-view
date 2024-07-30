import { TestBed } from '@angular/core/testing';

import { TeamAbilityStatsService } from './team-ability-stats.service';

describe('TeamAbilityStatsService', () => {
  let service: TeamAbilityStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamAbilityStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
