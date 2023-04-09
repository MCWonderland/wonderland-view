import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCompareComponent } from './team-compare.component';

describe('TeamCompareComponent', () => {
  let component: TeamCompareComponent;
  let fixture: ComponentFixture<TeamCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
