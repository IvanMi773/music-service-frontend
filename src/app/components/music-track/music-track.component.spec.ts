import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicTrackComponent } from './music-track.component';

describe('MusicTrackComponent', () => {
  let component: MusicTrackComponent;
  let fixture: ComponentFixture<MusicTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
