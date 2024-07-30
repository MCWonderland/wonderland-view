import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsVideoComponent } from './stats-video.component';

describe('StatsVideoComponent', () => {
  let component: StatsVideoComponent;
  let fixture: ComponentFixture<StatsVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
