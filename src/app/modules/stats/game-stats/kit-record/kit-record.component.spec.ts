import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitRecordComponent } from './kit-record.component';

describe('KitRecordComponent', () => {
  let component: KitRecordComponent;
  let fixture: ComponentFixture<KitRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
