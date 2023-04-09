import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentStatsComponent } from './recent-stats.component';

describe('RecentStatsComponent', () => {
  let component: RecentStatsComponent;
  let fixture: ComponentFixture<RecentStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
