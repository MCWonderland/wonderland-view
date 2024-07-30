import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStagesComponent } from './game-stages.component';

describe('GameStagesComponent', () => {
  let component: GameStagesComponent;
  let fixture: ComponentFixture<GameStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameStagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
