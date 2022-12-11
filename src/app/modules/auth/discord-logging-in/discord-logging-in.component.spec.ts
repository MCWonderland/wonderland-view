import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordLoggingInComponent } from './discord-logging-in.component';

describe('DiscordLoggingInComponent', () => {
  let component: DiscordLoggingInComponent;
  let fixture: ComponentFixture<DiscordLoggingInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordLoggingInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordLoggingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
